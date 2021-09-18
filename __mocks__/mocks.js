const chalk = require('chalk')

module.exports = {
  MSG: 'My test message',
  OBJ: { a: 1, b: 2 },
  ARR: [1, 2, 3],
  FN: () => {},
  ERR: new Error('Could not parse input'),
  MSGS: ['1', '2', '3', '4'],
  LOG: chalk.bgBlack.white.bold(' LOG '),
  INFO: chalk.bgBlue.black.bold(' INFO '),
  DONE: chalk.bgGreen.black.bold(' DONE '),
  PASS: chalk.bgGreen.black.bold(' PASS '),
  ERROR: chalk.bgRed.black.bold(' ERROR '),
  WARN: chalk.bgYellow.black.bold(' WARN '),
  FAIL: chalk.bgRed.black.bold(' FAIL '),
  DEBUG: chalk.bgMagenta.white.bold(' DEBUG '),
  BLANK: '\n'.repeat(process.stdout.rows)
}
