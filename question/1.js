const fucArr = [
  next => {
    setTimeout(() => {
      console.log(1);
      next()
    }, 300)
  },
  next => {
    setTimeout(() => {
      console.log(2);
      next()
    }, 200)
  },
  next => {
    setTimeout(() => {
      console.log(3);
      next()
    }, 100)
  }
]

var run1 = arr => {
  if (arr.length === 0) return
  arr[0](() => run1(arr.slice(1)))
}

var run2 = arr => {
  const trigger = () => {
    if (arr.length === 0) return
    arr.shift()()
  }
  arr = arr.map(func => {
    return () => {
      func(trigger)
    }
  })
  trigger()
}

run1(fucArr)