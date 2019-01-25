
function codeGenerator(node) {
  switch (node.type) {
    case 'Program':
      return node.body.map(codeGenerator).join('\n');

    case 'ExpressionStatement':
      return codeGenerator(node.expression) + ';'

    case 'CallExpression':
      return (
        codeGenerator(node.callee)
        + '('
        + node.arguments.map(codeGenerator).join(',')
        + ')'
      )

    case 'NumberLiteral':
      return node.value

    case 'StringLiteral':
      return `"${node.value}"`

    case 'Identifier':
      return node.name

    default:
      throw new TypeError(node.type)
  }
}

module.exports = codeGenerator