import { describe, expect, it } from 'vitest'
import { debug } from '../index'
import mock from '../__mocks__/mocks'

process.env.TEST = true

describe('tests debug functionality', () => {
  it('checks debug', () => {
    expect(debug(mock.MSG)).toBe(mock.DEBUG + ' ' + mock.MSG)
  })
})
