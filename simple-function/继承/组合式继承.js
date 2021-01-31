function Parent(name) {
  this.parentName = name
  this.colors = ['yellow', 'red']
}

Parent.prototype.sayParent = function () {
  console.log(this.parentName, this.colors)
}

function Child(name) {
  Parent.call(this, name)
  this.childName = name
}

Child.prototype = new Parent()
// constructor修正
Child.prototype.constructor = Child
Child.prototype.sayChild = function () {
  console.log(this.childName, this.colors)
}

const instace1 = new Child('instance1')
instace1.colors.push('pick')
instace1.sayChild()

const instance2 = new Child('instance2')
instance2.sayChild()

// 缺点缺点：
//
// 1. 父类被实例两次
