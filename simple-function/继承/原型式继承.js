function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

var Parent = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};

// var child1 = object(Parent)
// object和Object.create意义相同
var child1 = Object.create(Parent)
child1.name = 'Peater'
child1.friends.push('dog')

var child2 = object(Parent)
console.log(child2.friends)

// 缺点：引用类型会受影响
