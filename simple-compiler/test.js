const recast = require('recast')

const code =
  `
  function add (a, b) {
     return a + 
     b
  }
  `

const ast = recast.parse(code)
