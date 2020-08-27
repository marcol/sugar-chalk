const { debug } = require('../index')
const { MSG, DEBUG } = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests debug functionality', () => {
  it('checks debug', () => {
    expect(debug(MSG)).toBe(DEBUG + ' ' + MSG)
  })
})
