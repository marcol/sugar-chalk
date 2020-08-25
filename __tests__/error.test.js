const { error } = require('../sugar')
const { MSG, ERROR } = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests error functionality', () => {
  it('checks error', () => {
    expect(error(MSG)).toBe(ERROR + ' ' + MSG)
  })
})
