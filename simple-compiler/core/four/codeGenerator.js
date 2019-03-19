const ast = {
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "name": "add"
        },
        "arguments": [
          {
            "type": "NumberLiteral",
            "value": "2"
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "name": "subtract"
            },
            "arguments": [
              {
                "type": "NumberLiteral",
                "value": "42"
              },
              {
                "type": "StringLiteral",
                "value": "asd"
              }
            ]
          }
        ]
      }
    }
  ]
}

/**
 * 代码生成，根据语义，生成目标代码
 * @param node
 * @returns {*}
 */
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

// console.log(codeGenerator(ast))

module.exports = codeGenerator