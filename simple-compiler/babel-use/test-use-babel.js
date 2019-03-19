const babel = require('babel-core');
const input = "const result = 1 + 2 + 3 + 4"

const plugin = ({ types: t }) => {
  let res = undefined
  const _replace = (path, state) => {
    const node = path.node
    if (t.isNumericLiteral(node.left) && t.isNumericLiteral(node.right)) {
      switch (node.operator) {
        case "+":
          res = node.left.value + node.right.value;
          break;
        default:
      }
    }
    if (res) {
      path.replaceWith(t.numericLiteral(res))
    }
  }
  return {
    visitor: {
      BinaryExpression: {
        enter(path, state) {
          _replace(path, state)
        },
        exit(path, state) {
          _replace(path, state)
        }
      }
    }
  }
}

const res = babel.transform(input, {
  plugins: [plugin]
})

console.log(res.code)
