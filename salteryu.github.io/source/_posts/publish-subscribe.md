---
title: Vue原理(一)
date: 2018年11月24日
---
<br/>

观察者模式设计
====
在软件设计中是一个对象，维护一个依赖列表，当任何状态发生改变自动通知它们。(来自wiki百科)

例：小明去买房（观察者Observer），去找房产中心（目标主体Subject），发布者说等有合适的就通知小明。这样就形成了一个环

发布订阅模式设计
====

在软件架构中，发布-订阅是一种消息范式，消息的发送者（称为发布者）不会将消息直接发送给特定的接收者（称为订阅者）。而是将发布的消息分为不同的类别，无需了解哪些订阅者（如果有的话）可能存在。同样的，订阅者可以表达对一个或多个类别的兴趣，只接收感兴趣的消息，无需了解哪些发布者（如果有的话）存在。(来自wiki百科)

例：小明去买房（订阅者Subscriber），委托第三方中介去买房（调度中心Event Channel），等待第三方中介回馈消息，过了一会房产中心（发布者Publisher）发布消息给第三方中介，第三方中介发现正好符合小明的要求（key）就去通知小明。

两者区别
====

<img src="https://user-gold-cdn.xitu.io/2017/11/22/15fe1b1f174cd376?imageslim" />

图片来源: <a href="http://developers-club.com/posts/270339/" >developers-club</a>

>1. 在观察者模式中，观察者是知道主体Subject的，而Subject一直保持对观察者的记录。相反在发布订阅中，两者并不互相了解，只能通过代理进行沟通。
>2. 观察者模式大多数是同步，如：事件触发，而发布订阅模式大多数是异步，如：消息队列。
>3. 观察者模式是一种紧耦合状态，而发布订阅模式是一种松耦合的状态。
>4. 观察者模式是通过主体本身去遍历观察者（维护的是观察者），然后调用订阅者的通知方法去实现。而发布订阅则是通过事件管道去通知（维护的是事件）。

MVVM和MVC的区别
====
MVVM 是 Model-View-ViewModel 的缩写。mvvm 是一种设计思想。Model 层代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑；View 代表 UI 组件，它负责将数据模型转化成 UI 展现出来，ViewModel 是一个同步 View 和 Model 的对象。

在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互，Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。

ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而 View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作 DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

Vue.js 是一个提供了 MVVM 风格的双向数据绑定的 Javascript 库，专注于View 层。它的核心是 MVVM 中的 VM，也就是 ViewModel。 ViewModel负责连接 View 和 Model，保证视图和数据的一致性，这种轻量级的架构让前端开发更加高效、便捷。 

回到Vue
==== 

Vue的双向绑定则是利用了观察者模式实现的。
参考链接：https://segmentfault.com/a/1190000013338801

<pre>
<code>
class Observer {
  value: any;
  dep: Dep;
  vmCount: number; // number of vms that has this object as root $data

  constructor (value: any) {
    this.value = value
    this.dep = new Dep()
    this.vmCount = 0
    // 为了标明该对象已经被observer过
    def(value, '__ob__', this)
    if (Array.isArray(value)) {
      if (hasProto) {
        protoAugment(value, arrayMethods)
      } else {
        copyAugment(value, arrayMethods, arrayKeys)
      }
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }

  /**
   * Walk through each property and convert them into
   * getter/setters. This method should only be called when
   * value type is Object.
   */
  walk (obj: Object) {
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i])
    }
  }

  /**
   * Observe a list of Array items.
   */
  observeArray (items: Array<any>) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i])
    }
  }
}
</code>
</pre>

 <pre><code>
 // 拦截数据
 export function defineReactive (
   obj: Object,
   key: string,
   val: any,
   customSetter?: ?Function,
   shallow?: boolean
 ) {
   const dep = new Dep()
 
   const property = Object.getOwnPropertyDescriptor(obj, key)
   if (property && property.configurable === false) {
     return
   }
 
   // cater for pre-defined getter/setters
   const getter = property && property.get
   const setter = property && property.set
   if ((!getter || setter) && arguments.length === 2) {
     val = obj[key]
   }
 
   let childOb = !shallow && observe(val)
   Object.defineProperty(obj, key, {
     enumerable: true,
     configurable: true,
     get: function reactiveGetter () {
       const value = getter ? getter.call(obj) : val
       if (Dep.target) {
         dep.depend()
         if (childOb) {
           childOb.dep.depend()
           if (Array.isArray(value)) {
             dependArray(value)
           }
         }
       }
       return value
     },
     set: function reactiveSetter (newVal) {
       const value = getter ? getter.call(obj) : val
       /* eslint-disable no-self-compare */
       if (newVal === value || (newVal !== newVal && value !== value)) {
         return
       }
       /* eslint-enable no-self-compare */
       if (process.env.NODE_ENV !== 'production' && customSetter) {
         customSetter()
       }
       // #7981: for accessor properties without setter
       if (getter && !setter) return
       if (setter) {
         setter.call(obj, newVal)
       } else {
         val = newVal
       }
       childOb = !shallow && observe(newVal)
       // 使当前的调度中心通知所有Watcher
       dep.notify()
     }
   })
 }
 </code></pre>
 
 Vue模版渲染
 
 在执行npm run dev或者npm run build的时候，Vue使用rollup进行编译，入口文件为entry-runtime-with-compiler.js，
 该文件有以下代码，在runtime的时候执行
 ```vue
 // entry-runtime-with-compiler.js，
 import Vue from './runtime/index'
 ```
 ```vue
 // runtime/index.js
 import Vue from 'core/index'
 ```
 ```vue
 // core/index.js
 // 导入Vue的实例，初始化全局Api
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'
initGlobalAPI(Vue)
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
```
```vue
// instance/index.js
// 做Vue的各种模块混
// 每当new Vue的时候执行初始化
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
// 初始化混入 *
initMixin(Vue)

stateMixin(Vue)
// 事件混入
eventsMixin(Vue)
// 生命周期的混入 *
lifecycleMixin(Vue)
// render函数混入 *
renderMixin(Vue)
```
```vue
// 走进this._init(options)方法
// 最主要的是
// 触发Vue原型上的$mount方法，进行compile。compiler/index.js会返回render函数和sataicRenderFns函数。等待renderMixin函数的使用。
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }

```
在render.js的renderMixi方法中使用了以下方法
```vue
// core/instance/render.js文件中 line:83
// 这里就是将template进行转换
try {
      vnode = render.call(vm._renderProxy, vm.$createElement)
  }

// render方法 ，由compiler方法返回，功能是使用with语句的作用是将代码的作用域设置到一个特定的作用域中。之后的msg的都是访问的this中的属性，而this就是
// vm._renderProxy（vm的一个代理实例），由于Vue自己的proxy方法会将this.data.msg的值的获取改为this.msg，因此msg就变成了
// options中的data的一个值传入。经过_c (createElement)方法完成template模版的替换。
(function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"el"}},[_v("\n  "+_s(msg)+_s(msg)+"\n")])}
})
```
###梳理下Vue初始化流程：
>1. 在<font color=pink size=4>new</font>实例Vue的时候，调用<font color="pink" size="4">this._init(options)</font>方法将传入的对象作为$options属性存在Vue实例中。并将各种组件的props，父子组件的inject属性和指令进行合并，开始走created流程。
>2. 执行了<font color="pink" size="4">initState()</font>方法，对所有数据包括(props和methods)进行拦截，给数据进行observer，并且给被observer过的属性增加ob属性标识，来表示已经被observer。【数据拦截原理见上方观察者模式】
>> <font color="grey" size=2>补充:由于遍历对象的属性，则每个对象都会有一个Dep，且一个Dep可能会有许多Watcher，因为可能这个属性的值被多处使用，所以当数据改变，则遍历触发自身的所有的Watcher。即dep.notify() => Array.forEach.update</font>
>3. 之后调用<font color=pink size=4>vm.$mount(el)</font>方法, 进行Vue的mounted。
>4. 在这之前用一个字段mount存储目标的自定义mounted方法后调用公用的mounted方法，在mounted过程中调用<font color=pink size=4>compilerToFunctions()</font>方法返回一个render函数(一个with关键字函数，切设计虚拟DOM树)，并设置<font color=pink size=4>options.render = render</font>。
>5. 在公用的mounted方法后有一个<font color="pink" size="4">return mount.call(this, el, hydrating)</font>方法，开始调用自定义的mounted方法。
>6. 在自定义mounted方法中，调用<font color="pink" size="4">mountComponent()</font>完成观察者模式：实例Watcher类。
>7. 每个Watcher类在constructor中会调用<font color="pink" size="4">this.value = this.lazy ? undefined : this.get()</font>, 而this.get()方法将自身依赖push给全局的targetStack数组中，并把Dep.target的指向指为当前Watcher。 当要获取属性的值的时候，相应属性自身的get方法之前，将会被之前observer数据拦截，此时Dep.target就存在值，就调用了内部的<font color="pink" size="4">dep.depend()</font>方法实现依赖关系，将当前Watcher放入当前Dep中，等待后期的数据更新。这样就行成了一个依赖环。

最后贴一下官网的生命周期图<a href="https://cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA">Vue生命周期</a>

Vue的详细模板编译原理<a href="https://github.com/berwin/Blog/issues/18">传送门</a>


