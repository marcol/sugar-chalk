import { describe, expect, it } from 'vitest'
import { done } from '../index'
import mock from '../__mocks__/mocks'

process.env.TEST = true

describe('tests done functionality', () => {
  it('checks done', () => {
    expect(done(mock.MSG)).toBe(mock.DONE + ' ' + mock.MSG)
  })
})
