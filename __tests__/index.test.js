const { chalk, log } = require('../sugar')
const original = require('chalk')
const mocks = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests sugar chark functionality', () => {
  it('checks chalk', () => {
    expect(chalk).toEqual(original)
  })

  it('checks log', () => {
    expect(log(mocks.MSG)).toBe(mocks.SPACE + ' ' + mocks.MSG)
  })
})
