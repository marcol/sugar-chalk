const { log } = require('../sugar')
const { LOG, MSG } = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests log functionality', () => {
  it('checks log message', () => {
    expect(log(MSG)).toContain(LOG)
    expect(log(MSG)).toContain(MSG)
  })

  it('check time in message', () => {
    expect(log(MSG)).toMatch(/^.+\d{1,2}:\d{1,2}:\d{1,2}.*/)
  })
})
