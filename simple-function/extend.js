// 原型链继承
// 缺点：①.子类型无法给超类型传递参数，在面向对象的继承中，我们总希望通过 var child = new Child('son', 'father');
// 让子类去调用父类的构造器来完成继承。而不是通过像这样 new Parent('father') 去调用父类。
// ②.Child.prototype.sayName 必须写在 Child.prototype = new Parent('father'); 之后，不然就会被覆盖掉。
function Parent(name) {
  this.name = name
}

Parent.prototype.sayName = function () {
  console.log('parent', this.name)
}

function Child(name) {
  this.name = name
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

Child.prototype.sayName = function () {
  console.log('child', this.name)
}

var child = new Child('son')
child.sayName()


// 类式继承， 缺点：没有父类原型，无法使用父类函数。

function Parent(name) {
  this.name = name
}

Parent.prototype.do = function () {
  console.log('parent', this.name)
}

function Child(name, parentName) {
  Parent.call(this, parentName)
  this.name = name
}

Child.prototype.sayName = function () {
  console.log('child', this.name)
}

var child = new Child('son')
child.sayName()
child.do()


// 组合式继承，前两种组合。缺点：调用了两次父类，创建子类的时候和子类型构造函数内部
function Parent(name) {
  this.name = name
}

Parent.prototype.do = function () {
  console.log('do something')
}

function Child(name, parentName) {
  Parent.call(this, parentName) // 第二次
  this.name = name
}

Child.prototype = new Parent() // 第一次
Child.prototype.constructor = Child

Child.prototype.sayName = function () {
  console.log('child', this.name)
}

var child = new Child('son', 'parent')
child.sayName()
child.do()


// 寄生组合式继承一
function Parent(name) {
  this.name = name
}

Parent.prototype.sayParent = function () {
  console.log('parent', this.name)
}

function Child(name, parentName) {
  Parent.call(this, parentName)
  this.name = name
}

function inhert(proto) {
  function F() {}
  F.prototype = proto
  F.prototype.constructor = F
  return new F()
}

Child.prototype = inhert(Parent.prototype)
Child.prototype.sayChild = function () {
  console.log('child', this.name)
}
Child.prototype.constructor = Child

var parent = new Parent('father');
parent.sayParent();    // parent name: father


var child = new Child('son', 'father');
child.sayChild();     // child name: son

// 寄生组合式继承二, 缺点：子类想要在原型上添加方法，必须在继承之后添加，否则将覆盖掉原有原型上的方法。这样的话 若是已经存在的两个类，就不好办了。
// 所以，我们可以将其优化一下：
function Parent(name) {
  this.name = name;
}
Parent.prototype.sayParent = function() {
  console.log('parent name:', this.name);
}

function Child(name, parentName) {
  Parent.call(this, parentName);
  this.name = name;
}

function inheritPrototype(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);   //修改
  Child.prototype.construtor = Child;
}

inheritPrototype(Parent, Child);

Child.prototype.sayChild = function() {
  console.log('child name:', this.name);
}

var parent = new Parent('father');
parent.sayParent();      // parent name: father

var child = new Child('son', 'father');
child.sayChild();

// 寄生组合式继承三
function Parent(name) {
  this.name = name;
}
Parent.prototype.sayParent = function() {
  console.log('parent name:', this.name);
}

function Child(name, parentName) {
  Parent.call(this, parentName);
  this.name = name;
}

function inheritPrototype(Parent, Child) {
  const parentPrototype = Object.create(Parent.prototype);   //修改
  Child.prototype = Object.assign(parentPrototype, Child.prototype)
  Child.prototype.constructor = Child
}

inheritPrototype(Parent, Child);

Child.prototype.sayChild = function() {
  console.log('child name:', this.name);
}

var parent = new Parent('father');
parent.sayParent();      // parent name: father

var child = new Child('son', 'father');
child.sayChild();
