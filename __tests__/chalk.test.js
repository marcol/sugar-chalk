const { chalk } = require('../sugar')
const original = require('chalk')

process.env.TEST = true

describe('tests chalk functionality', () => {
  it('checks chalk method is chalk', () => {
    expect(chalk).toEqual(original)
  })
})
