import { describe, expect, it } from 'vitest'
import { clear } from '../index'
import mock from '../__mocks__/mocks'

process.env.TEST = true

describe('tests sugar chalk functionality', () => {
  it('checks clear', () => {
    expect(clear()).toBe(mock.BLANK)
  })
})
