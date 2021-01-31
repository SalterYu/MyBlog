// https://juejin.im/post/5b83cb5ae51d4538cc3ec354

class MyPromise{
  constructor(fun) {
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined
    this._fulfilledQueues = []

    const resolve = value => {
      if (this.status === 'pending') {
        this.status = 'fulfilled'
        this.value = value
        while (this._fulfilledQueues.length > 0) {
          const fun = this._fulfilledQueues.shift()
          this.value = fun(this.value)
        }
      }
    }

    const reject = error => {
      if (this.status === 'pending') {
        this.status = 'rejected'
        this.reason = error
      }
    }

    try {
      fun(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled, onRejected) {
    switch (this.status) {
      case 'fulfilled':
        this.value = onFulfilled(this.value);
        return this
      case 'rejected':
        onRejected(this.reason)
        return this
      case 'pending':
        this._fulfilledQueues.push(onFulfilled);
        return this
      default:
        return this
    }
  }
}

let promise = new MyPromise((resolve, rej) => {
  setTimeout(() => {
    resolve(1)
  })
}).then(res => {
  return res + res
}).then(res => res + res)

promise.then(res => {
  console.log(res)
})
// let promise = new MyPromise((res, rej) => {
//   res(1)
// }).then(res => {
//   return res + res
// })
//
// promise.then(res => {
//   console.log(res)
// })

