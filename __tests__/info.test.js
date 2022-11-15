import { describe, expect, it } from 'vitest'
import { info } from '../src/index'
import mock from '../__mocks__/mocks'

process.env.TEST = true

describe('tests info functionality', () => {
  it('checks info', () => {
    expect(info(mock.MSG)).toContain(mock.INFO + ' ' + mock.MSG)
  })
})
