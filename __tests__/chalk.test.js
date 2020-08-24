const { chalk } = require('../sugar')
const original = require('chalk')

describe('tests chalk functionality', () => {
  it('check if chalk is original chalk', () => {
    expect(chalk).toEqual(original)
  })
})
