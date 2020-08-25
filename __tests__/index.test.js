const { chalk, clear, done, error, fail, info, log, pass, warn } = require('../sugar')
const original = require('chalk')
const mocks = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests sugar chark functionality', () => {
  it('checks clear', () => {
    clear()
  })

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

  it('checks done', () => {
    expect(done(mocks.MSG)).toBe(mocks.DONE + ' ' + mocks.MSG)
  })

  it('checks pass', () => {
    expect(pass(mocks.MSG)).toBe(mocks.PASS + ' ' + mocks.MSG)
  })

  it('checks error', () => {
    expect(error(mocks.MSG)).toBe(mocks.ERROR + ' ' + mocks.MSG)
  })

  it('checks fail', () => {
    expect(fail(mocks.MSG)).toBe(mocks.FAIL + ' ' + mocks.MSG)
  })

  it('checks warn', () => {
    expect(warn(mocks.MSG)).toBe(mocks.WARN + ' ' + mocks.MSG)
  })
})
