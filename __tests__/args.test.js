const { info, error } = require('../index')
const { MSGS, OBJ, ARR, ERR, INFO } = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests arguments functionality', () => {
  test('tests multiple', () => {
    expect(info(...MSGS)).toBe(INFO + ' ' + MSGS.join(' '))
  })

  test('tests object', () => {
    expect(info(OBJ)).toContain(JSON.stringify(OBJ))
  })

  test('test array', () => {
    expect(info(ARR)).toContain(JSON.stringify(ARR))
  })

  test('tests error', () => {
    expect(error(ERR)).toContain(ERR.message)
  })
})
