// 监听函数


function isNativeObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]"
}

const data = {
  a: {
    b: 1,
    c: 2
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
          dep.forEach(fn => fn(newVal, val))
          val = newVal
        }
      })
    }
  }
}

walk(data)

let Target = null
function $watch(expOrFun, fn) {
  // 设置当前target
  Target = fn
  let obj = data
  let pathArr
  if (typeof expOrFun === 'function') {
    expOrFun()
    return;
  }
  if (/\./.test(expOrFun)) {
    // 将字符串转为 ['a', 'b']
    pathArr = expOrFun.split('.')
    pathArr.forEach(p => {
      obj = obj[p]
    })
    return
  }
  // 读取值来触发get
  data[expOrFun]
}

$watch('a.b', () => {
  console.log('a.b 依赖')
})

// $watch(function () {
//   return data.a.b + data.a.c
// }, function (n, o) {
//   console.log('function', n, o)
// })


data.a.b = 2
data.a.c = 1
