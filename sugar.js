const chalk = require('chalk')
const LOG = chalk.bgBlack.white.bold(' LOG ')
const INFO = chalk.bgBlue.black.bold(' INFO ')

function log (msg) {
  if (process.env.TEST) {
    return msg.join(' ')
  } else {
    return console.log.apply(null, msg)
  }
}

module.exports.clear = null
module.exports.done = null
module.exports.error = null

module.exports.info = (...msg) => {
  msg.unshift(INFO)
  return log(msg)
}

module.exports.log = (...msg) => {
  msg.unshift(LOG)
  return log(msg)
}

module.exports.warn = null
module.exports.chalk = chalk
