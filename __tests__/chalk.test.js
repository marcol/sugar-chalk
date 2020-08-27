const { chalk } = require('../index')
const original = require('chalk')

process.env.TEST = true

describe('tests chalk functionality', () => {
  it('checks chalk method is chalk', () => {
    expect(chalk).toEqual(original)
  })
})
