const babel = require('babel-core');

const input = `
function test() {
  wx.showModal({
    title: "modal",
    content: 'content'
  })
}`

const plugin = ({types: t}) => {
  return {
    visitor: {
      MemberExpression: {
        enter(path, state) {
          const node = path.node
          const object = node.object
          if (t.isMemberExpression(node) && t.isIdentifier(object, {name: 'wx'})) {
            // console.log(node)
            path.replaceWithSourceString('asdas')
            // object.name = 'swan'
          }
        }
      }
    }
  }
}

const res = babel.transform(input, {
  plugins: [plugin]
})

console.log(res.code)