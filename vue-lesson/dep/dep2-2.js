  // 添加$watch

  const data = {
    a: 1
  }

  const dep = []
  Object.defineProperty(data, 'a', {
    set() {
      // console.log('设置了属性 a')
      dep.forEach(fn => fn())
    },
    get() {
      // console.log('读取了属性 a')
      dep.push(Target)
    }
  })

  let Target = null
  function $watch(exp, fn) {
    // 设置当前target
    Target = fn
    // 读取值来触发get
    data[exp]
  }

  $watch('a', () => {
    console.log('依赖1')
  })

  $watch('a', () => {
    console.log('依赖2')
  })

  data.a = '2'
