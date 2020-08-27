const { info } = require('../index')
const { MSG, MSGS, INFO } = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests info functionality', () => {
  it('checks info', () => {
    expect(info(MSG)).toContain(INFO + ' ' + MSG)
  })

  it('check info with multiple messages', () => {
    expect(info(...MSGS)).toBe(INFO + ' ' + MSGS.join(' '))
  })
})
