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
            path.traverse({
              Identifier(path) {
                if (path.node.name === 'wx') {
                  path.node.name = 'swan'
                }
              }
            })
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