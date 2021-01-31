// 添加$watch

const data = {
  a: 1
}

const dep = []
Object.defineProperty(data, 'a', {
  set() {
    // console.log('设置了属性 a')
    // 触发所有订阅
    dep.forEach(fn => fn())
  },
  get() {
    // console.log('读取了属性 a')
    // 添加fn函数
    dep.push(fn)
  }
})


// 更新值
data.a = 2
