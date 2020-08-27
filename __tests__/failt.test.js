const { fail } = require('../index')
const { MSG, FAIL } = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests fail functionality', () => {
  it('checks fail', () => {
    expect(fail(MSG)).toBe(FAIL + ' ' + MSG)
  })
})
