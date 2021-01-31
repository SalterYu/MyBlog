function curry(fn, ...args) {
  let length = fn.length
  args = args || []
  return function () {
    var newArgs = Array.prototype.slice.call(arguments)
    var _args = args.concat(newArgs)
    if (_args.length < length) {
      // 当参数不够长度fn所需参数长度的时候，需要补充参数
      return curry.call(this, fn, ..._args)
    } else {
      // 当参数超过所需参数长度的时候，直接执行
      return fn.call(fn, ..._args)
    }
  }
}


function multiFn(a, b, c) {
  console.log(a, b, c)
  return a * b * c;
}

var c = curry(multiFn, 10)

console.log(c(10, 2))

Promise
