var window = {}

Function.prototype.myCall = function (ctx, ...args) {
  ctx = typeof ctx === 'object' ? ctx || window : {}
  // 判断args是否为数组
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

