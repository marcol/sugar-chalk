const { warn } = require('../index')
const { MSG, WARN } = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests warn functionality', () => {
  it('checks warn', () => {
    expect(warn(MSG)).toBe(WARN + ' ' + MSG)
  })
})
