/**
 * 首先 myCall 需要被定义在 Function.prototype 上这样才能在函数上调用到自定义的 myCall 方法
 然后定义 myCall 方法，该方法内部 this 指向的就是 myCall 方法被调用的那个函数
 其次 myCall 第一个参数对象中新增 this 指向的这个方法，并调用这个方法
 最后删除这个临时的方法即可
 * @type {{}}
 */

var window = {}

Function.prototype.myCall = function (ctx, ...args) {
  ctx = typeof ctx === 'object' ? ctx || window : {}
  const fn = Symbol('fn') // 避免命名冲突
  ctx[fn] = this
  ctx[fn](...args)
  delete ctx[fn]
}

window.a = 'window'

var obj = {a: 'obj'}

function foo(key) {
  console.log(this[key])
}

foo.myCall(null, 'a')

