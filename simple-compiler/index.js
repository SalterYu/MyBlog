
const compiler = require('./core/compiler')

const input = '(add 2 (subtract 42 "asd"))'

console.log(compiler(input))