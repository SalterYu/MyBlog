// 4.0以前写法
// function FileListPlugin (options) {
// }
//
// FileListPlugin.prototype.apply = function (compiler) {
//   compiler.plugin('emit', function (compilation, callback) {
//   let fileList = 'in this build:\n\n'
//   for (let fileName in compilation.assets) {
//     fileList += ('-' + fileName + '\n')
//   }
//   compilation.assets['fileList.md'] = {
//     source: function () {
//       return fileList
//     },
//     size: function () {
//       return fileList.length
//     }
//   }
//   callback()
//   })
// }
//
// module.exports = FileListPlugin

// 4.0之后写法
const pluginName = 'FileListPlugin'

class FileListPlugin {
  apply (compiler) {
    compiler.hooks.emit.tap(pluginName, (compilation, callback) => {
      let fileList = 'in this build:\n\n'
      for (let fileName in compilation.assets) {
        fileList += ('-' + fileName + '\n')
      }
      compilation.assets['fileList.md'] = {
        source: function () {
          return fileList
        },
        size: function () {
          return fileList.length
        }
      }
      // callback()
    })
  }
}

module.exports = FileListPlugin