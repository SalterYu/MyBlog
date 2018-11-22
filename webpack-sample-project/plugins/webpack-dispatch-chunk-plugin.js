const pluginName = 'WebpackDispatchChunkPlugin'

class WebpackDispatchChunkPlugin {
  constructor (options) {
    this.options = options
  }
  apply (compiler) {
    compiler.hooks.emit.tapAsync(pluginName, (compilation, callback) => {
      const keywords = this.options.bundle
      const assets = Object.assign(compilation.assets)
      let res = {}
      const keys = Object.keys(assets).map((item, index) => {
        return {
          [index]: item
        }
      })
      const values = Object.values(assets)
      keys.forEach((item, index) => {
        const value = Object.values(item)[0]
        console.log(value)
        if (value.indexOf('bundle') > -1) {
          res = Object.assign(res, {
            [value.replace('bundle', keywords)]: values[index]
          })
        } else {
          res = Object.assign(res, {
            [value]: values[index]
          })
        }
      })
      console.log(res)
      compilation.assets = res
      callback()
    })
    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      compilation.hooks.htmlWebpackPluginAlterAssetTags.tapAsync(pluginName, (data, callback) => {
        data.body.forEach((script, index) => {
          let name = script.attributes.src
          let keywords = this.options.bundle
          if(name.indexOf('bundle') > -1 && name.indexOf(keywords) <= 0) {
            data.body[index].attributes.src = data.body[index].attributes.src.replace('bundle', keywords)
          }
        })
        callback(null, data)
      })
    })
  }
}

module.exports = WebpackDispatchChunkPlugin