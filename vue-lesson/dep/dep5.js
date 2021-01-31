// 嵌套劫持

function isNativeObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

const data = {
  a: {
    b: 1
  }
}

function walk(data) {
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      const dep = []
      let val = data[key]
      if (isNativeObject(val)) {
        return walk(val)
      }
      Object.defineProperty(data, key, {
        get() {
          dep.push(Target)
          return val
        },
        set(newVal) {
          if (val === newVal) return
          val = newVal
          dep.forEach(fn => fn())
        }
      })
    }
  }
}

walk(data)

let Target = null
function $watch(exp, fn) {
  // 设置当前target
  Target = fn
  let obj = data
  let pathArr
  // 读取值来触发get
  if (/\./.test(exp)) {
    // 将字符串转为 ['a', 'b']
    pathArr = exp.split('.')
    pathArr.forEach(p => {
      obj = obj[p]
    })
    return
  }
  data[exp]
}

$watch('a.b', () => {
  console.log('a.b 依赖')
})


data.a.b = 2



