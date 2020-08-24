const { chalk, log } = require('../sugar')
const original = require('chalk')
const MSG = 'My test message'
const SPACE = '       '

process.env.TEST = true

describe('tests sugar chark functionality', () => {
  it('checks chalk', () => {
    expect(chalk).toEqual(original)
  })

  it('checks log', () => {
    expect(log(MSG)).toBe(SPACE + ' ' + MSG)
  })
})
