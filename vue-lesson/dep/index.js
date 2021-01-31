const data = {
  a: 1,
  b: 2
}


for (const key in data) {
  const dep = []
  let val = data[key]
  Object.defineProperty(data, key, {
    set(newVal) {
      if (val === newVal) return
      val = newVal
      dep.forEach(fn => fn())
    },
    get() {
      dep.push(Target)
      return val
    }
  })
}


let Target = null

function $watch(exp, fn) {
  Target = fn
  data[exp]
}

// $watch('a', () => {
//   console.log('第一个依赖a')
// })
// $watch('a', () => {
//   console.log('第二个依赖a')
// })

$watch('b', () => {
  console.log('第一个依赖b')
})
$watch('b', () => {
  console.log('第二个依赖b')
})
console.log(data.a)
data.a = '2'
data.b = '3'
console.log(data.a)
