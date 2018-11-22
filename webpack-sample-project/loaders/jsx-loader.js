const {getOptions} = require('loader-utils')
const validateOptions = require('schema-utils')
const {parseComponent} = require('./build')
const chalk = require('chalk')
const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'boolean'
    }
  }
}


const func = function (source) {
  const options = getOptions(this)
  validateOptions(schema, options, 'Example Loader')
  console.log(parseComponent(source))
  return `module.exports = ${r}`
}

const render = (htmlObj) => {
  return () => {
    const {html, tagName} = JSON.parse(htmlObj)
    let el = document.createElement(tagName)
    el.textContent = html
    return el
  }
}

module.exports = func
