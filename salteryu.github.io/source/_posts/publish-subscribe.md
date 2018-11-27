---
title: Vue原理
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

<h1 />
回到Vue

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
 
 从编译入口开始看Vue
 
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
