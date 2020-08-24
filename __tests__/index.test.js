const { chalk, info, log } = require('../sugar')
const original = require('chalk')
const mocks = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests sugar chark functionality', () => {
  it('checks chalk', () => {
    expect(chalk).toEqual(original)
  })

  it('checks log', () => {
    expect(log(mocks.MSG)).toBe(mocks.LOG + ' ' + mocks.MSG)
  })

  it('check exanded message log', () => {
    expect(log(...mocks.MSGS)).toBe(mocks.LOG + ' ' + mocks.MSGS.join(' '))
  })

  it('checks info', () => {
    expect(info(mocks.MSG)).toBe(mocks.INFO + ' ' + mocks.MSG)
  })
})
