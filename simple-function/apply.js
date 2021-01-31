Function.prototype.myApply = function (contenxt) {
  if (typeof this !== 'function') {
    throw new Error('no function')
  }
  const fn = Symbol['fn']
  contenxt[fn] = this
  var res = null
  if (arguments[1]) {
    res = contenxt[fn](...arguments[1])
  } else {
    res = contenxt[fn]()
  }
  delete contenxt[fn]
  return res
}

var obj = {
  a: 2
}

this.a = 1

function test() {
  console.log(this.a, ...arguments)
}

test.myApply(obj)