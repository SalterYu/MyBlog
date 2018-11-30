import initOptions from './instance/init'
import proxy from "./instance/proxy";
import Compiler from "./compile";
import Watcher from "./observer/watcher";
import callHook from './instance/lifecycle'

export default class Wue {
  constructor(options) {
    const vm = this
    vm.$options = options
    vm.$watch = (expOrFn, cb) => {
      return new Watcher(vm, expOrFn, cb)
    }
    initOptions(vm)
    callHook(vm, 'mounted')
    Object.keys(vm._data).forEach(key => {
      proxy(vm, '_data', key)
    })
    new Compiler(this.$options.el, vm)
  }
}