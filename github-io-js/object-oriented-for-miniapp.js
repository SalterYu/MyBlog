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
    viewData1: {},
    viewData2: []
  },
  onLoad() {
    return this.getData();
  },
  getData() {
    // 获取两次数据
    return getActivityId().then(res1 => {
      this.data.couponItem = res1.couponItem;
      return getProducts().then(res2 => {
        this.res2 = res2;
        this.data.viewData2 = res2.map(item => {
          return {
            actId: this.data.couponItem,
            ...item
          };
        });
        return this.data.viewData2;
      });
    });
  },
  // 模拟用户点击操作, 用户点击，将这个viewData2.data1变成了3
  // 比如更改优惠券的选择，或者支付方式
  mockTap() {
    // 不使用优惠券，置为0000
    this.data.couponItem = '0000';
  },
  postData() {
    // 提交数据需要
    // 提交的数据需要viewData2的数据，因为用户不适用优惠券，导致要重新执行一下初始化viewData2的方法，因为所有的项目都不需要优惠券才对
    this.data.viewData2 = this.res2.map(item => {
      return {
        actId: '0000',
        ...item
      };
    });
    console.log(this.data.viewData2);
    // do post
  }
};

// obj.onLoad().then(res => {
//   console.log('res', res);
//   obj.mockTap();
//   obj.postData();
// });

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
  // 模拟用户点击操作, 用户点击，将这个viewData2.data1变成了3
  // 比如更改优惠券的选择，或者支付方式
  mockTap() {
    // 不使用优惠券，置为0000
    this.data.viewData.changeCouponItem('0000');
  },
  postData() {
    // 提交数据需要
    // 提交的数据需要viewData2的数据，因为用户不适用优惠券，导致要重新执行一下初始化viewData2的方法，因为所有的项目都不需要优惠券才对
    console.log(this.data.viewData.getPostData());
    // do post
  }
};

obj2.onLoad().then(_ => {
  console.log(obj2.data.viewData);
  obj2.mockTap()
  obj2.postData()
})
