/*!
 * fancy-inherit
 * (c) 2016-2018 ULIVZ
 */

// 不同于object.assign, 该 merge方法会复制所有的源键
// 不管键名是 Symbol 或字符串，也不管是否可枚举
function fancyShadowMerge(target, source) {
  for (const key of Reflect.ownKeys(source)) {
    Reflect.defineProperty(target, key, Reflect.getOwnPropertyDescriptor(source, key))
  }
  return target
}

// Core
function inherit(child, parent) {
  const objectPrototype = Object.prototype
  // 继承父类的原型
  const parentPrototype = Object.create(parent.prototype)
  let childPrototype = child.prototype
  // 若子类没有继承任何类，直接合并子类原型和父类原型上的所有方法
  // 包含可枚举/不可枚举的方法
  if (Reflect.getPrototypeOf(childPrototype) === objectPrototype) {
    child.prototype = fancyShadowMerge(parentPrototype, childPrototype)
  } else {
    // 若子类已经继承子某个类
    // 父类的原型将在子类原型链的尽头补全
    while (Reflect.getPrototypeOf(childPrototype) !== objectPrototype) {
      childPrototype = Reflect.getPrototypeOf(childPrototype)
    }
    Reflect.setPrototypeOf(childPrototype, parent.prototype)
  }
  // 重写被污染的子类的constructor
  parentPrototype.constructor = child
}


// GithubUser
function GithubUser(username, password) {
  let _password = password
  this.username = username
}

GithubUser.prototype.login = function () {
  console.log(this.username + '要登录Github，密码是' + _password)
}

// JuejinUser
function JuejinUser(username, password) {
  GithubUser.call(this, username, password)
  WeiboUser.call(this, username, password)
  this.articles = 3
}

JuejinUser.prototype.readArticle = function () {
  console.log('Read article')
}

// WeiboUser
function WeiboUser(username, password) {
  this.key = username + password
}

WeiboUser.prototype.compose = function () {
  console.log('compose')
}

// 先让 JuejinUser 继承 GithubUser，然后就可以用github登录掘金了
inherit(JuejinUser, GithubUser)
// 再让 JuejinUser 继承 WeiboUser，然后就可以用weibo登录掘金了
inherit(JuejinUser, WeiboUser)

const juejinUser1 = new JuejinUser('ulivz', 'xxx')

console.log(juejinUser1)

console.log(juejinUser1 instanceof GithubUser) // true
console.log(juejinUser1 instanceof WeiboUser) // true
