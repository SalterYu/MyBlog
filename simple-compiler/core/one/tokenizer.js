/**
 * 将输入的表达式转换成tokens
 * @param input
 * @returns {Array}
 */

function tokenizer(input) {
  let tokens = []
  let current = 0
  const WHITESPACE = /\s/; // 空格
  const PAREN = /\(|\)/; // 括号
  const NUMBERS = /[0-9]/ // 数字
  const LETTERS = /[a-z]/i // 英文

  while (current < input.length) {
    let char = input[current]
    // 若匹配空格
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }
    // 若匹配括号
    if (PAREN.test(char)) {
      current++;
      tokens.push({
        type: 'paren',
        value: char
      })
      continue;
    }
    // 若匹配到数字
    // 由于匹配数字会有以下情况
    // add 123 456
    // 因此要在下一个空格之前返回所有数字
    if (NUMBERS.test(char)) {
      let value = ''
      while (NUMBERS.test(char)) {
        value = value + char;
        char = input[++current]
      }
      tokens.push({
        type: 'number',
        value
      })
      continue;
    }

    // 若匹配英文
    if (LETTERS.test(char)) {
      let value = ''
      while (LETTERS.test(char)) {
        // if (!char) break
        value = value + char;
        char = input[++current]
      }
      tokens.push({
        type: 'name',
        value
      })
      continue;
    }

    if (char === '"') {
      let value = ''
      char = input[++current]
      while (char !== '"') {
        value = value + char
        char = input[++current]
      }

      // 跳过尾部的引号   '"'
      char = input[++current]

      // 把当前对象作为string标识添加
      tokens.push({
        type: 'string',
        value
      })
      continue;
    }

    throw new Error('unknown str ' + char)
  }
  return tokens
}

// const input = '(add 2 (subtract 4 "abc"))'

// console.log(tokenizer(input))

module.exports = tokenizer