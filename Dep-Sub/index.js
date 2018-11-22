
class Dep {
  constructor() {
    this.subs = []
  }

  // 增加订阅的内容
  addSub (sub) {
    this.subs.push(sub)
  }

  // 发布
  notify () {
    this.subs.forEach(sub => sub.update())
  }
}

class Watcher {
  constructor(fn) {
    this.fn = fn
  }

  // 更新
  update() {
    this.fn()
  }
}

let dep = new Dep()
dep.addSub(new Watcher(() => {
  console.log('okokok')
}))

dep.notify()

