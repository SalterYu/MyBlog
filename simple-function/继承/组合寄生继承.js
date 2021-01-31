function inheritPrototype(subType, superType){
  var prototype = Object.create(superType.prototype); // 创建对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype; // 指定对象
}

function Parent(name) {
  this.parentName = 'parent'
  this.colors = ['pick', 'yellow']
}

Parent.prototype.sayName = function(){
  console.log(this.parentName, this.colors)
};

function Child(name, age){
  Parent.call(this, name);
  this.age = age;
}

inheritPrototype(Child, Parent)

Child.prototype.sayHi = function () {
  console.log(this.age)
}

var child1 = new Child('child1', 1)
child1.colors.push('black')
var child2 = new Child('child2', 2)
child2.sayName()

