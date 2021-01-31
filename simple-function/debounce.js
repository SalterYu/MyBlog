function debounce(callback, delay, immediate) {
  let timer = null
  return function () {
    const context = this
    if (immediate) {
      const callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, delay)
      if (callNow) callback.apply(context, arguments)
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        callback.apply(context, arguments)
      }, delay)
    }
  }
}

const f = debounce((a) => {
  console.log(a)
}, 2000, true)

f(1)
f(2)
f(3)
setTimeout(() => {
  f(4)
}, 3000)
