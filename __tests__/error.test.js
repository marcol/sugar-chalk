import { describe, expect, it } from 'vitest'
import { error } from '../index'
import mock from '../__mocks__/mocks'

process.env.TEST = true

describe('tests error functionality', () => {
  it('checks error', () => {
    expect(error(mock.MSG)).toBe(mock.ERROR + ' ' + mock.MSG)
  })
})
