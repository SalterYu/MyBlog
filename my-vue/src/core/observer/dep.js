// @flow

import type Watcher from './watcher'

class Dep {
  static target: ?Watcher
  subs: Array<Watcher>

  constructor() {
    this.subs = []
  }

  addSub(sub: Watcher) {
    this.subs.push(sub)
  }

  notify() {
    this.subs.forEach(sub => sub.update())
  }

  depend() {
    if (Dep.target) {
      Dep.target.subscribe(this)
    }
  }
}

Dep.target = null
const targetStack = []

export function pushTarget(_target: ?Watcher) {
  if (Dep.target) targetStack.push(_target)
  Dep.target = _target
}

export function popTarget() {
  Dep.target = targetStack.pop()
}

export default Dep
