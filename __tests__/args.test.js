import { describe, expect, it } from 'vitest'
import { info, error } from '../index'
import mock from '../__mocks__/mocks'

process.env.TEST = true

describe('tests arguments functionality', () => {
  it('tests multiple', () => {
    expect(info(...mock.MSGS)).toBe(mock.INFO + ' ' + mock.MSGS.join(' '))
  })

  it('tests object', () => {
    expect(info(mock.OBJ)).toContain(JSON.stringify(mock.OBJ))
  })

  it('test array', () => {
    expect(info(mock.ARR)).toContain(JSON.stringify(mock.ARR))
  })

  it('tests error', () => {
    expect(error(mock.ERR)).toContain(mock.ERR.message)
  })
})
