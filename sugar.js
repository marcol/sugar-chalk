const chalk = require('chalk')
const SPACE = '       '

function log (...args) {
  if (process.env.TEST) {
    return args.join(' ')
  } else {
    console.log.apply(null, args)
  }
}

module.exports.clear = null
module.exports.done = null
module.exports.error = null
module.exports.info = null

module.exports.log = (msg) => {
  return log(SPACE, msg)
}

module.exports.warn = null
module.exports.chalk = chalk
