const fs = require('fs')
const babylon = require('babylon')
const path = require('path')
const traverse = require('babel-traverse').default
const babel = require('babel-core')
const config = require('./bundler.config')
const mkdirp = require('mkdirp')

let ID = 0

/**
 * 加载文件，获取依赖模块，通过babylon转为AST,得到Import的声明，将申明文件存入dependencies数组中。并将代码进行编译。
 * @param filename
 * @returns {{id: number, filename: *, dependencies: Array, code}}
 */
function createAsset(filename) {
  const content = fs.readFileSync(filename, 'utf-8')
  const ast = babylon.parse(content, {
    sourceType: 'module'
  })
  const dependencies = []
  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      dependencies.push(node.source.value)
    }
  })
  console.log(ast)
  const id = ID++
  const { code } = babel.transformFromAst(ast, null, {
    presets: ['env']
  })
  return {
    id,
    filename,
    dependencies,
    code
  }
}

function createGraph(entry) {
  const mainAsset = createAsset(entry)
  const queue = [mainAsset]
  for (const asset of queue) {
    const dirname = path.dirname(asset.filename)
    asset.mapping = {}
    asset.dependencies.forEach(relativePath => {
      const absolutePath = path.join(dirname, relativePath)
      const childAsset = createAsset(absolutePath)
      asset.mapping[relativePath] = childAsset.id
      queue.push(childAsset)
    })
  }
  return queue
}

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
}

const graph = createGraph(config.entry)
console.log(graph)
const bundleRes = bundle(graph)
mkdirp.sync(config.output.path)
fs.writeFileSync(path.join(config.output.path + config.output.filename), bundleRes)