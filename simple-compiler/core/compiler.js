const tokenizer = require('./one/index')
const parser = require('./two/index')
const transformer = require('./three/index')
const codeGenerator = require('./four/index')

function compiler(input) {
  const tokens = tokenizer(input)
  const ast = parser(tokens)
  const newAst = transformer(ast)
  const output = codeGenerator(newAst)
  return output
}

module.exports = compiler