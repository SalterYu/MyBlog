简易的模块打包器

###实现原理

1. 配置好一个入口文件，出口文件。
2. 利用babylon，将文件中的代码转为AST，再利用babel-traverse，将import声明的文件放入对应的dependencies数组中，最后利用babel-core将AST返回可执行的code。将这一过程封装为一个方法。
3. 从入口文件进行编译，获取依赖的文件。循环遍历子资源，分别给引用的依赖文件设置标识，之后通过对应的绝对路径引用模块。如asset.mapping[relativePath] = childAsset.id
4. 将第三步生成的数组代码通过特定的编译方式重新加工，类似套一个壳。最终将生成的代码变为 新的 js文件输出。

主要代码如下
```vue
function bundle(graph) {
  let modules = ''
  graph.forEach(item => {
    modules += `${item.id}:[
      function(require, module, exports) {
        ${item.code}
      },
      ${JSON.stringify(item.mapping)}
    ],`
  })
  const result = `
  (function(modules){
    function require(id) {
      const [fn, mapping] = modules[id]
      function localRequire(relativePath) {
        return require(mapping[relativePath])
      }
      const module = { exports : {} }
      fn(localRequire, module, module.exports)
      return module.exports
    }
    require(0)
  })({${modules}})
  `
  return result
```