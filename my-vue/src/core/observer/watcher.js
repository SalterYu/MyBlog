// @flow

import type Dep from './dep'
import {pushTarget, popTarget} from "./dep";

class Watcher {
  cb: Function
  expOrFn: string // dom里面的花括号表达式{{}}, 当前当作非方法来使用
  vm: any // Vue的组件
  originValue: any // 初始值
  _changeValue: any // 被改变的值
  constructor(vm: any, expOrFn: string, cb: Function) {
    this.cb = cb;
    this.vm = vm;
    this.expOrFn = expOrFn
    this.originValue = this.get()
    this._changeValue = this.originValue
  }

  update() {
    let newValue = this.vm
    let oldValue = this._changeValue
    this.expOrFn.split('.').forEach((key) => {
      newValue = newValue[key]
    })
    this._changeValue = newValue
    this.cb.call(this.vm, newValue, oldValue)
  }

  subscribe(dep: Dep) {
    dep.addSub(this)
  }

  get() {
    pushTarget(this)
    let val = this.vm
    this.expOrFn.split('.').forEach(key => {
      val = val[key]
    })
    popTarget()
    return val
  }
}

export default Watcher