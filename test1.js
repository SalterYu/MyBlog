const Vue = require('vue')

const vue = new Vue()


console.log(Vue)

const Instance = function () {
  this.init = function () {
    this.complie = Vue.complie('<div>123</div>')
    console.log(this.complie)
  }
  this.init()
}

var instance = new Instance()
