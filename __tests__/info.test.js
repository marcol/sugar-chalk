const { info } = require('../index')
const { MSG, INFO } = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests info functionality', () => {
  test('checks info', () => {
    expect(info(MSG)).toContain(INFO + ' ' + MSG)
  })
})
