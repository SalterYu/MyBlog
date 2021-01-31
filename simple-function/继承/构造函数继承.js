function Parent(name) {
  this.parentName = 'parent' + name
  this.colors = ['red', 'yellow']
}

Parent.prototype.sayParent = function () {
  console.log(this.parentName)
}

function Child(name) {
  Parent.call(this, name)
  this.childName = 'child' + name
}

Child.prototype.sayChild = function () {
  console.log(this.colors)
}

let child = new Child('instance')
child.colors.push('black')
child.sayChild()

let child2 = new Child('instance2')
child2.sayChild()

// 缺点 ①. 获取不到父类实例的方法。
//     ②. 函数不能复用
