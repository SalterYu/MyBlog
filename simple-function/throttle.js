// function throttle (fn, delay) {
//   let pre = undefined
//   return function () {
//     let context = this
//     let now = Date.now()
//     if (!pre || now - pre >= delay) {
//       fn.apply(context, arguments)
//       pre = Date.now()
//     }
//   }
// }
//
// function f(a) {
//   console.log(a)
// }
//
// const fn = throttle(f, 1000)
//
// fn(1)
// fn(2)
// setTimeout(() => {
//   fn(3)
// }, 1200)

class A {
  throttle(fn, delay) {
    const self = this
    this.pre = undefined
    return function () {
      let context = this
      let now = Date.now()
      if (!self.pre || now - self.pre >= delay) {
        fn.apply(context, arguments)
        self.pre = Date.now()
      }
    }
  }
  search() {
    console.log(111)
  }
  main() {
    if (!this.start) this.start =  this.throttle(this.search, 1000)
    this.start()
  }
}

// const a = new A()

const a = {
  throttle(fn, delay) {
    const self = this
    this.pre = undefined
    return function () {
      let context = this
      let now = Date.now()
      if (!self.pre || now - self.pre >= delay) {
        fn.apply(context, arguments)
        self.pre = Date.now()
      }
    }
  },
  search() {
    console.log(111)
  },
  main() {
    if (!this.start) this.start =  this.throttle(this.search, 1000)
    this.start()
  }
}


function throttle(callback, delay) {
  let pre = 0
  return function () {
    const context = this
    let now = +new Date()
    if (now - delay >= pre) {
      callback.apply(context, arguments)
      pre = now
    }
  }
}

// let f = throttle((a) => {
//   console.log(a)
// }, 2000)
//
// f(1);
// f(1);
// f(1);
// f(1);
// f(1);
// setTimeout(() => {
//   f(2)
// }, 3000)



function throttle2(callback, delay) {
  let timer = null
  return function () {
    const context = this
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        callback.apply(context, arguments)
      }, delay)
    }
  }
}
let f = throttle2((a) => {
  console.log(a)
}, 1000)

f(1)
setTimeout(() => {
  f(2)
}, 2000)






a.main()
a.main()
setTimeout(() => {
  a.main()
}, 1000)

