import { describe, expect, it } from 'vitest'
import { pass } from '../src/index'
import mock from '../__mocks__/mocks'

process.env.TEST = true

describe('tests pass functionality', () => {
  it('checks pass', () => {
    expect(pass(mock.MSG)).toBe(mock.PASS + ' ' + mock.MSG)
  })
})
