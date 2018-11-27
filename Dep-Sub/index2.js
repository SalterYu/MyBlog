/**
 * 发布订阅模式
 */

class event {
  constructor() {
    this.eventList = []
  }

  // 订阅
  listen(key, fn) {
    if (!this.eventList[key]) {
      this.eventList[key] = []
    }
    this.eventList[key].push(fn)
  }

  // 发布
  trigger() {
    let key = Array.prototype.shift.call(arguments)
    let fns = this.eventList[key]
    if (!fns || fns.length === 0) return false
    fns.forEach(fn => {
      fn.apply(this, arguments)
    })
  }
}

const myMsg = new event()
myMsg.listen('a', (val) => {
  console.log(val)
})
myMsg.trigger('a', 111)