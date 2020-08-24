const chalk = require('chalk')
const LOG = chalk.bgBlack.white.bold(' LOG ')
const INFO = chalk.bgBlue.black.bold(' INFO ')
const DONE = chalk.bgGreen.white.bold(' DONE ')
const PASS = chalk.bgGreen.white.bold(' PASS ')
const ERROR = chalk.bgRed.white.bold(' ERROR ')
const WARN = chalk.bgYellow.white.bold(' WARN ')

function log (msg) {
  if (process.env.TEST) {
    return msg.join(' ')
  } else {
    return console.log.apply(null, msg)
  }
}

module.exports.clear = null

module.exports.done = (...msg) => {
  msg.unshift(DONE)
  return log(msg)
}

module.exports.pass = (...msg) => {
  msg.unshift(PASS)
  return log(msg)
}

module.exports.error = (...msg) => {
  msg.unshift(ERROR)
  return log(msg)
}

module.exports.info = (...msg) => {
  msg.unshift(INFO)
  return log(msg)
}

module.exports.log = (...msg) => {
  msg.unshift(LOG)
  return log(msg)
}

module.exports.warn = (...msg) => {
  msg.unshift(WARN)
  return log(msg)
}

module.exports.chalk = chalk
