const chalk = require('chalk')

module.exports = {
  MSG: 'My test message',
  MSGS: ['1', '2', '3', '4'],
  LOG: chalk.bgBlack.white.bold(' LOG '),
  INFO: chalk.bgBlue.black.bold(' INFO '),
  DONE: chalk.bgGreen.white.bold(' DONE '),
  PASS: chalk.bgGreen.white.bold(' PASS '),
  ERROR: chalk.bgRed.white.bold(' ERROR '),
  WARN: chalk.bgYellow.white.bold(' WARN '),
  FAIL: chalk.bgRed.white.bold(' FAIL ')
}
