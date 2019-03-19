const assert = require('assert');

/**
 * 将转换成的tokens变成ast语法树，需要递归遍历
 * 语法分析，获取token的标记，并将其重新格式化为描述语法各个部分及其相互关系的表示形式，称为AST。这是一个深度嵌套的对象，以一种即方便使用又能提供大量信息的方式来表示的代码。
 * @param tokens
 * @returns {{type: string, body: Array}}
 */

function parser (tokens) {
  let current = 0
  let token = tokens[current]

  const walk = () => {
    token = tokens[current]
    if (token.type === 'string') {
      current++
      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    if (token.type === 'number') {
      current++
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // 若发现 "(" 则标识为CallExpression, 并对 括号 内部的数据进行walk遍历
    if (token.type === 'paren' && token.value === '(') {
      token = tokens[++current]
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: []
      }
      token = tokens[++current]
      // 对括号内部字符串进行遍历
      while(token.type !== 'paren' || (token.value !== ')' && token.type === 'paren')) {
        node.params.push(walk())
        // 重新更新值，因为在执行walk()方法后，会让current + 1，当期望token变为“)”的时候，若不进行赋值，token还是之前的对象，会导致此处while
        // 循环继续遍历，继续执行walk方法。由于walk方法有赋值操作，更新了当前的token值，但由于没有任何可以匹配")"的情况，会返回undefined。
        // 因此若此处不进行赋值，会生成一个null对象
        token = tokens[current]
      }
      current++
      return node
    }
  }
  let ast = {
    type: 'Program',
    body: []
  }
  while(current < tokens.length) {
    ast.body.push(walk())
  }

  return ast
}


const tokens = [ { type: 'paren', value: '(' },
  { type: 'name', value: 'add' },
  { type: 'number', value: '2' },
  { type: 'paren', value: '(' },
  { type: 'name', value: 'subtract' },
  { type: 'number', value: '4' },
  { type: 'number', value: '2' },
  { type: 'paren', value: ')' },
  { type: 'paren', value: ')' } ]

const ast = {
  type: 'Program',
  body: [{
    type: 'CallExpression',
    name: 'add',
    params: [{
      type: 'NumberLiteral',
      value: '2'
    }, {
      type: 'CallExpression',
      name: 'subtract',
      params: [{
        type: 'NumberLiteral',
        value: '4'
      }, {
        type: 'NumberLiteral',
        value: '2'
      }]
    }]
  }]
}

assert.deepStrictEqual(parser(tokens), ast)

// console.log(JSON.stringify(parser(tokens), null, 2))

module.exports = parser