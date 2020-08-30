const { info } = require('../index')
const { MSGS, OBJ, FN, ERR, INFO } = require('../__mocks__/mocks')

process.env.TEST = true

describe('tests arguments functionality', () => {
  test('tests multiple', () => {
    expect(info(...MSGS)).toBe(INFO + ' ' + MSGS.join(' '))
  })

  test('tests object', () => {
    expect(info(OBJ)).toContain(OBJ)
  })

  test('tests error', () => {
    expect(info(ERR)).toContain(ERR)
  })

  test('tests function', () => {
    expect(info(FN)).toContain(FN)
  })
})
