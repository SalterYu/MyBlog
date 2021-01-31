function Parent() {
  this.parentName = 'parent'
  this.colors = ['pick', 'yellow']
}

Parent.prototype.getParentName = function () {
  console.log(this.parentName)
}


function Child(name) {
  this.childName = name
}

Child.prototype = new Parent()

Child.prototype.getChildName = function () {
  console.log(this.childName, this.colors)
}

const child = new Child('child')
child.colors.push('black')
child.getChildName()
child.getParentName()

const child2 = new Child('child')
child2.getChildName()

// console.log(child.__proto__ === Child.prototype) // true
// console.log(child.__proto__.__proto__ === Parent.prototype) // true

// 缺点：
// 1. 给原型添加方法的代码一定要放在替换原型的语句之后。
// 2. 引用类型值的原型属性会被所有实例共享。
// 3. 在创建子类型的实例时，不能向超类型的构造函数中传递参数。实际上， 应该说是没有办法在不影响所有对象实例的情况下，给超类型的构造函数传递参数。
