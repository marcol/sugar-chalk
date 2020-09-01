const chalk = require('chalk')
const readline = require('readline')
let silent = false

function log (msg) {
  const fn = msg.shift()
  if (process.env.TEST || silent) {
    return msg.join(' ')
  } else {
    return console[fn].apply(null, msg)
  }
}

module.exports.silent = (state = true) => {
  silent = state
}

module.exports.clear = () => {
  const blank = '\n'.repeat(process.stdout.rows)

  if (process.env.TEST) {
    return blank
  } else {
    console.log(blank)
    readline.cursorTo(process.stdout, 0, 0)
    readline.clearScreenDown(process.stdout)
  }
}

module.exports.done = (...msg) => {
  msg.unshift('info', chalk.bgGreen.black.bold(' DONE '))
  return log(msg)
}

module.exports.pass = (...msg) => {
  msg.unshift('info', chalk.bgGreen.black.bold(' PASS '))
  return log(msg)
}

module.exports.fail = (...msg) => {
  msg.unshift('error', chalk.bgRed.black.bold(' FAIL '))
  return log(msg)
}

module.exports.error = (...msg) => {
  msg.unshift('error', chalk.bgRed.black.bold(' ERROR '))
  return log(msg)
}

module.exports.info = (...msg) => {
  msg.unshift('info', chalk.bgBlue.black.bold(' INFO '))
  return log(msg)
}

module.exports.log = (...msg) => {
  msg.unshift('log', chalk.bgBlack.white.bold(' LOG '),
    chalk.blue(new Date().toLocaleTimeString()))
  return log(msg)
}

module.exports.debug = (...msg) => {
  msg.unshift('debug', chalk.bgMagenta.white.bold(' DEBUG '))
  return log(msg)
}

module.exports.warn = (...msg) => {
  msg.unshift('warn', chalk.bgYellow.black.bold(' WARN '))
  return log(msg)
}

module.exports.chalk = chalk
