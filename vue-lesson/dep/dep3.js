// 拦截其他同级字段

const data = {
  a: 1,
  b: 2
}

for (const key in data) {
  const dep = []
  Object.defineProperty(data, key, {
    set() {
      // console.log('设置了属性 a')
      // 触发所有订阅
      dep.forEach(fn => fn())
    },
    get() {
      // console.log('读取了属性 a')
      // 添加fn函数
      dep.push(Target)
    }
  })
}

let Target = null
function $watch(exp, fn) {
  // 设置当前target
  Target = fn
  // 读取值来触发get
  data[exp]
}

$watch('a', () => {
  console.log('依赖a1')
})

$watch('a', () => {
  console.log('依赖a2')
})

$watch('b', () => {
  console.log('依赖b1')
})

$watch('b', () => {
  console.log('依赖b2')
})

// 更新值
data.a = 'a'
data.b = 'b'
