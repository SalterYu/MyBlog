const pluginName = 'CheckCompilationHooksPlugin'

class CheckCompilationHooksPlugin {
  apply (compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
      for (let hook in compilation.hooks) {
        console.log(hook)
      }
    })
  }
}

module.exports = CheckCompilationHooksPlugin