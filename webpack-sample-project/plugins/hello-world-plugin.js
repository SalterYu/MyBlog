function HelloWorldPlugin (options) {
  // 使用 options 设置插件实例……
}

HelloWorldPlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', function (compilation, callback) {
    console.log('Hello world')
    callback()
  })
}

module.exports = HelloWorldPlugin