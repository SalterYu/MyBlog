Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    throw new Error('no function')
  }
  const fn = Symbol['fn']
  context[fn] = this
  var res = null

  if (arguments[1]) {
    res = context[fn](...arguments[1])
  } else {
    res = context[fn]()
  }
  delete context[fn]
  return res
}

var obj = {
  a: 2
}

this.a = 1

function test() {
  console.log(arguments)
  console.log(this.a, ...arguments)
}

test.myApply(obj, 'a')

// test.call(this, arg1, arg2);
// test.apply(this, [arg1, arg2])