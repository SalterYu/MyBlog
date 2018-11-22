const config = require('./config')

const func = function () {
  let greet = document.createElement('div')
  greet.textContent = config.greetText
  return greet
}
export default func;

