const { clear } = require('../sugar')
const { BLANK } = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests sugar chalk functionality', () => {
  it('checks clear', () => {
    expect(clear()).toBe(BLANK)
  })
})
