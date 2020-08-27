const { pass } = require('../index')
const { MSG, PASS } = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests pass functionality', () => {
  it('checks pass', () => {
    expect(pass(MSG)).toBe(PASS + ' ' + MSG)
  })
})
