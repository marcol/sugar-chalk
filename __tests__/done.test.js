const { done } = require('../sugar')
const { MSG, DONE } = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests done functionality', () => {
  it('checks done', () => {
    expect(done(MSG)).toBe(DONE + ' ' + MSG)
  })
})
