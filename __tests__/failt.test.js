import { describe, expect, it } from 'vitest'
import { fail } from '../index'
import mock from '../__mocks__/mocks'

process.env.TEST = true

describe('tests fail functionality', () => {
  it('checks fail', () => {
    expect(fail(mock.MSG)).toBe(mock.FAIL + ' ' + mock.MSG)
  })
})
