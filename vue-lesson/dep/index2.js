const data = {
  c: {
    a: 1
  }
}


for (const key in data) {
  const dep = []
  const value = data[key]
  Object.defineProperty(data, key, {
    get() {
      dep.push(Target)
      return value
    },
    set(n) {
      dep.forEach(fn => fn())
    }
  })
}


let Target = null
function $watch(exp, fn) {
  Target = fn

  let obj = data
  if (/\./.test(exp)) {
    const arr = exp.split('.')
    arr.forEach(key => {
      obj = obj[key]
    })
    return
  }
  data[key]
}

$watch('c.a', () => {
  console.log('拦截C')
})


// $watch('a', (n, o) => {
//   console.log('拦截')
// })
//
// $watch('b', () => {
//   console.log('拦截b')
// })

data.c.a = 2
