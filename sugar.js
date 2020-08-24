const chalk = require('chalk')
const readline = require('readline')

function log (msg) {
  if (process.env.TEST) {
    return msg.join(' ')
  } else {
    return console.log.apply(null, msg)
  }
}

module.exports.clear = () => {
  const blank = '\n'.repeat(process.stdout.rows)
  console.log(blank)
  readline.cursorTo(process.stdout, 0, 0)
  readline.clearScreenDown(process.stdout)
}

module.exports.done = (...msg) => {
  msg.unshift(chalk.bgGreen.white.bold(' DONE '))
  return log(msg)
}

module.exports.pass = (...msg) => {
  msg.unshift(chalk.bgGreen.white.bold(' PASS '))
  return log(msg)
}

module.exports.error = (...msg) => {
  msg.unshift(chalk.bgRed.white.bold(' ERROR '))
  return log(msg)
}

module.exports.info = (...msg) => {
  msg.unshift(chalk.bgBlue.black.bold(' INFO '))
  return log(msg)
}

module.exports.log = (...msg) => {
  msg.unshift(chalk.bgBlack.white.bold(' LOG '))
  return log(msg)
}

module.exports.warn = (...msg) => {
  msg.unshift(chalk.bgYellow.white.bold(' WARN '))
  return log(msg)
}

module.exports.chalk = chalk
