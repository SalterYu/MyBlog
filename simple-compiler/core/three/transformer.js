/**
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *                                    |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */
const traverser = require('./traverser')

/**
 * 语义分析，分析当前的语法的词在上下文的具体意义，将AST进行改造，这个时候我们可以操纵各个属性，可以进行增删改替换等等，或者保留现在的AST，并创建一个全新的AST。
 * 这里通过visitor进行对不同的类型做不同的操作。
 * @param ast
 * @returns {{type: string, body: Array}}
 */
function transformer(ast) {
  let newAst = {
    type: 'Program',
    body: []
  }
  ast._context = newAst.body
  const visitor = {
    NumberLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value
        })
      },
      exit(node, parent) {

      }
    },
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value
        })
      }
    },
    CallExpression: {
      enter(node, parent) {
        // 将当前对象套一层CallExpression
        // 参数称为arguments
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name
          },
          arguments: []
        }
        // 给当前节点生成_context对象，指针指向expression.arguments
        node._context = expression.arguments
        // 如果父节点的类型不是CallExpression，则表示当前节点是一个新的表达式。
        if (parent.type !== 'CallExpression') {
          expression = {
            type: 'ExpressionStatement',
            expression: expression
          }
        }
        // 把当前表达式压入父对象的_context中，即newAst.body中
        parent._context.push(expression)
      }
    }
  }
  traverser(ast, visitor)
  return newAst
}

module.exports = transformer