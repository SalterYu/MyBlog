var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;


class MyPromise{
  constructor(fn) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this._fulfilledQueues = []

    const resolve = value => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value
        while (this._fulfilledQueues.length > 0) {
          const fun = this._fulfilledQueues.shift()
          this.value = fun(this.value)
        }
      }
    }

    const reject = err => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = err
      }
    }

    setTimeout(() => {
      try {
        fn(resolve, reject)
      } catch (e) {
        reject(e)
      }
    })
  }

  then(onFulfilled, onRejected) {
    if (this.status === PENDING) {
      this._fulfilledQueues.push(onFulfilled)
    } else if (this.status === REJECTED) {
      onRejected(this.reason)
    } else if (this.status === FULFILLED) {
      this.value = onFulfilled(this.value)
    }
    return this
  }
}

console.log(1)

var p = new MyPromise((resolve, reject) => {
  resolve(1)
}).then(res => {
  console.log(4)
  return res + res
})

console.log(3)
