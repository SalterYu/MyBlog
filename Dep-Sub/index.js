/*
* 观察者模式
* */

class Dep {
  constructor() {
    this.subs = []
  }

  addSub (sub) {
    this.subs.push(sub)
  }

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

