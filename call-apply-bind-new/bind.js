// bind 与 call 和 apply 不同的是，他不会立即调用这个函数，而是返回一个新的 this 改变后的函数。根据这一特点我们写一个自定义的 myBind：

Function.prototype.myBind = function (ctx, ...args1) {
  return (...args2) => {
    this.call(ctx, ...args1, ...args2)
  }
}

var obj = { a: 1 }

function f(x, y) {
  console.log(x + y,  this.a)
}

f.myBind(obj)(2, 1)
f.myBind(obj, 2)(1)
f.myBind(obj, 2, 1)()