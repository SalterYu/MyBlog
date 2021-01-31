// 1. 生成新的对象
// 2. 绑定prototype （既然是 new 一个实例，那么实例的 __proto__ 必然要与构造函数的 prototype 相连接）
// 3. 绑定this
// 4. 返回这个新对象

function myNew(Constructor, ...args) {
  let obj = {}
  obj.__proto__ = Constructor.prototype
  Constructor.call(obj, ...args)
  return obj
}

function Person(name) {
  this.name = name
}

const person = myNew(Person, 'person')
console.log(person)