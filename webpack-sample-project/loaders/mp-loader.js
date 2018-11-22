const LoaderUtils = require('loader-utils')
const validateOptions = require('schema-utils')
const {parseComponent} = require('./build')
const chalk = require('chalk')

const outPut = function (source) {
  const options = LoaderUtils.getOptions(this)
  const res = parseComponent(source)
  console.log(res.script.content)
  // this.callback(null, res.script.content)
  return `${res.script.content}`
}

module.exports = outPut