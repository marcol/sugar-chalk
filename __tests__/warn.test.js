import { describe, expect, it } from 'vitest'
import { warn } from '../index'
import mock from '../__mocks__/mocks'

process.env.TEST = true

describe('tests warn functionality', () => {
  it('checks warn', () => {
    expect(warn(mock.MSG)).toBe(mock.WARN + ' ' + mock.MSG)
  })
})
