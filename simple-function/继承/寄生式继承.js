function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function createAnother(original) {
  const clone = object(original) //通过调用函数创建一个新对象
  clone.sayHi = function () { // 已某种方式来增强这个对象
    console.log(this.name, this.friends)
  }
  return clone
}

var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};

anotherPerson = createAnother(person);
anotherPerson.sayHi(); //"hi"
anotherPerson.friends.push('dogs')

anotherPerson2 = createAnother(person);
anotherPerson2.sayHi(); //"hi"

// 引用类型会受影响
// 方法不好复用
