import chalk from 'chalk'

export default {
  MSG: 'My test message',
  OBJ: { a: 1, b: 2 },
  ARR: [1, 2, 3],
  FN: () => {},
  ERR: new Error('Could not parse input'),
  MSGS: ['1', '2', '3', '4'],
  LOG: [chalk.white.bold('  LOG'), chalk.black.bold('●'), chalk.blackBright(new Date().toLocaleTimeString())].join(' '),
  INFO: [chalk.white.bold(' INFO'), chalk.blue.bold('●')].join(' '),
  DONE: [chalk.white.bold(' DONE'), chalk.green.bold('●')].join(' '),
  PASS: [chalk.white.bold(' PASS'), chalk.green.bold('●')].join(' '),
  ERROR: [chalk.white.bold('ERROR'), chalk.red.bold('●')].join(' '),
  WARN: [chalk.white.bold(' WARN'), chalk.yellow.bold('●')].join(' '),
  FAIL: [chalk.white.bold(' FAIL'), chalk.red.bold('●')].join(' '),
  DEBUG: [chalk.white.bold('DEBUG'), chalk.magenta.bold('●')].join(' '),
  BLANK: '\n'.repeat(process.stdout.rows)
}
