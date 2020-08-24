const chalk = require('chalk')

module.exports = {
  MSG: 'My test message',
  MSGS: ['1', '2', '3', '4'],
  LOG: chalk.bgBlack.white.bold(' LOG '),
  INFO: chalk.bgBlue.black.bold(' INFO ')
}
