// 简单劫持

const data = {
  a: 1
}

const dep = []
Object.defineProperty(data, 'a', {
  set() {
    console.log('设置了属性 a')
  },
  get() {
    console.log('读取了属性 a')
  }
})

data['a']
data.a = 2



