import Dep from './dep'
export function def (obj: Object, key: string, val: any, enumerable?: boolean) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}
class Observer {
  constructor(value) {
    this.value = value
    def(value, '__ob__', this)
    this.walk(value)
  }

  walk(obj) {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object') observer(obj[key])
      defineReactive(obj, key, obj[key])
    })
  }
}

export const defineReactive = (obj, key, value) => {
  let dep = new Dep()
  // 如果value值是object则继续observer

  Object.defineProperty(obj, key, {
    get() {
      if (Dep.target) {
        dep.depend()
      }
      return value
    },
    set(newVal) {
      if (newVal === value) return
      // console.log(`setter: ${newVal}`)
      value = newVal
      console.log(dep)
      dep.notify()
    }
  })

}
export default function observer(value) {
  return new Observer(value)
}

