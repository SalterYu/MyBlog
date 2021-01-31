---
title: 在小程序使用面向对象的思想
date: 2020年03月25日
---

在小程序使用面向对象的思想
==========

面向对象是啥就不说了，这里主要讲如何在小程序中使用，以及为何我习惯使用这种思想。

### 案例
比如，你有一个需求或者接到了一个业务线，这个业务线可能需要一直迭代，若每次改动都在小程序的视图js中改动，这会让视图代码很耦合。
就好比现在的保养下单，在不了解业务的情况下，当改动一处功能，你以为完成了并且没有bug了，但说不准就影响了其他地方，直到测试的时候
才出现。甚至了解业务的人，时间长了也会遗忘。现在的情况大多都是面向流程，毕竟这是js，不是其他后端语言。
#### 面向过程
具体面向流程的代码栗子：
```vue
const delay = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const getActivityId = () => {
  return delay(2000).then(_ => ({ couponItem: '1234' }));
};
const getProducts = (b) => {
  return delay(3000).then(_ => ([{ id: 1, value: 1 }, { id: 2, value: 2 }]));
};

const start = () => {
  pro1().then(res1 => {
    console.log('pro1');
    pro2().then(res2 => {
      console.log('pro2');
    });
  });
};

let obj = {
  data: {
    couponItem: null,
    viewData: []
  },
  onLoad() {
    return this.getData();
  },
  getData() {
    // 获取两次数据
    return getActivityId().then(res1 => {
      this.data.couponItem = res1.couponItem
      return getProduct().then(res2 => {
        this.res2 = res2
        this.data.viewData = res2.map(item => {
          return {
            actId: this.data.couponItem,
            ...item
          }
        })
        // 设置数据进行渲染
        return this.data.viewData
      });
    });
  },
  // 模拟用户点击操作, 用户点击，将这个viewData.data1变成了3
  // 比如更改优惠券的选择，或者支付方式
  mockTap() {
    // 不使用优惠券，置为0000
    this.data.couponItem = '0000'
  },
  postData() {
    // 提交数据需要
    // 提交的数据需要viewData的数据，因为用户不适用优惠券，
    // 导致要重新执行一下初始化viewData的方法，
    // 因为所有的项目都不需要优惠券才对
    this.data.viewData = this.res2.map(item => {
      return {
        actId: '0000',
        ...item
      }
    })
    console.log(this.data.viewData);
    // do post
  }
};

obj.onLoad().then(res => {
  console.log('res', res);
  obj.mockTap()
  obj.postData()
})

```
上述代码是面向流程，主要是面向用户的使用角度。
1. 用户打开小程序，需要页面数据，则初始化数据，展示给用户。
2. 用户修改了优惠券信息。代码更改优惠券信息。
3. 用户下单，则获取数据，进行提交。

这就产生了一个问题，之后的人要维护代码，有需求说增加支付方式，因此初始化的时候也要加一个支付方式，提交的时候也要加支付方式
这就要改两个地方。之后越改越多越改越难改。总结就是：代码过于耦合，维护起来困难。

#### 面向对象
如果换成面向对象的方式。就变成了这样几个步骤。
1. 视图页面对象，也就是上面代码的obj。视图对象需要获取数据的功能，渲染数据的功能，处理数据的功能，提交数据功能。
2. 数据对象，也就是上方的viewData，在上面的业务逻辑中需要初始化功能，更换优惠券id功能，
   而viewData有个属性是一个Array<Product>.
3. Product对象，初始化功能
把代码处理下：
```vue
class Product {
  constructor(product, couponItem) {
    this.id = product.id
    this.value = product.value
    this.couponItem = couponItem
  }
}

class ViewData {
  constructor(couponItem, products) {
    this.couponItem = couponItem
    this._products = products
    this._initProduct()
  }

  changeCouponItem(couponItem) {
    this.couponItem = couponItem
  }

  _initProduct() {
    this.products = this._products.map(item => new Product(item, this.couponItem))
  }

  getPostData() {
    return this._products.map(item => new Product(item, this.couponItem))
  }
}

// 把async await的方法做优化
function to(
  promise,
  errorExt
) {
  return promise
    .then((data) => [null, data])
    .catch(err => {
      if (errorExt) {
        Object.assign(err, errorExt);
      }
      return [err, undefined];
    });
}

let obj2 = {
  data: {
    viewData: {}
  },
  onLoad() {
    return this._init();
  },
  async _init() {
    // 获取优惠券数据
    // 这里用了一个方法将async await的内部错误作为err返回
    const [err1, couponItem] = await to(getActivityId());
    if (err1) {
      return '没有数据'
    }
    const [err2, products] = await to(getProducts())
    if (err2) {
      return '没有产品数据'
    }
    this.data.viewData = new ViewData(couponItem.couponItem, products)
    // 做渲染
  },
  // 模拟用户点击操作, 用户点击，将这个viewData.data1变成了3
  // 比如更改优惠券的选择，或者支付方式
  mockTap() {
    // 不使用优惠券，置为0000
    this.data.viewData.changeCouponItem('0000');
  },
  postData() {
    // 提交数据需要
    // 提交的数据需要viewData的数据，因为用户不适用优惠券，导致要重新执行一下初始化viewData的方法，
    // 因为所有的项目都不需要优惠券才对
    console.log(this.data.viewData.getPostData());
    // do post
  }
};

obj2.onLoad().then(_ => {
  console.log(obj2.data.viewData);
  obj2.mockTap()
  obj2.postData()
})
```
代码就变的比较简洁，且维护的时候容易知道哪一块功能做啥的，也会告诉别人该怎么对代码进行拓展。这样的做法进行了解耦，也增加了可扩展性。
但坏处就是做之前要考虑好有哪些对象，需要进行声明。

#### 总结
typescript就很好的支持了面向对象开发，有抽象，继承，多态，封装。就是为面向对象进行服务。如果类型声明的好，也可以直接靠ide进行相应对象内部的属性。

现在小程序中有太多面向过程开发，这有太多是小程序自身的框架原因，诱导使用面向过程。面向过程关心的是先干什么，再干什么，如onLoad的时候做什么，onShow的时候做什么，
一步一步往下走，而过程多了，代码就乱了。
而面向对象，就是先根据业务需求，有哪些模型类，这个类（业务）要干什么，有什么属性，以及进行的状态，外部使用通过实例化建立联系，当需要完成什么功能，则可以通过
执行对象的方法后返回结果，视图层再进行处理这个结果，这样也保护了数据的完整性，具体可以了解函数式编程。
