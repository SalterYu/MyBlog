const eventsMixin = function (Constructor) {
  Constructor.prototype.$on = function (events, callback) {
    const vm = this
    if (Array.isArray(events)) {
      for(let i = 0; i < events.length;i ++) {
        Constructor.$on(events[i], callback)
      }
    } else {
      (vm._events[events] || (vm._events[events] = [])).push(callback)
    }
    return vm
  }

  Constructor.prototype.$once = function(events, cb) {
    const vm = this
    if (Array.isArray(events)) {
      for (let i = 0; i < events.length;i ++) {
        vm.$once(events, cb)
      }
      return vm
    }

    function on() {
      vm.$off(events, on)
      cb.apply(vm, arguments)
    }
    vm.$on(events, on)
    return vm
  }

  Constructor.prototype.$off = function (events, cb) {
    const vm = this
    if (arguments.length === 0) {
      vm._events = Object.create(null)
      return vm
    }
    if (Array.isArray(events)) {
      for(let i = 0; i < events.length ; i ++) {
        vm.$off(events[i], cb)
      }
      return vm
    }
    const cbs = vm._events[events]
    if (!cbs) return vm
    if (!cb) {
      vm._events[events] = null
      return vm
    }
    if (cb) {
      let fn
      let i = cbs.length
      while (i--) {
        fn = cbs[i]
        if ((fn === cb || fn.cb === cb)) {
          cbs.splice(i, 1)
          break;
        }
      }
    }
    return vm
  }
}

const Vue = function () {
  this._events = Object.create(null)
}
eventsMixin(Vue)
const vue = new Vue()
const cb = () => {}
vue.$once('test', (a) => {
  console.log(a)
})

vue._events['test'][0](1)
