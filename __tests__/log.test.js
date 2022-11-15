import { describe, expect, it } from 'vitest'
import { log } from '../src/index'
import mock from '../__mocks__/mocks'

process.env.TEST = true

describe('tests log functionality', () => {
  it('checks log message', () => {
    expect(log(mock.MSG)).toContain(mock.LOG)
    expect(log(mock.MSG)).toContain(mock.MSG)
  })

  it('check time in message', () => {
    expect(log(mock.MSG)).toMatch(/^.+\d{1,2}:\d{1,2}:\d{1,2}.*/)
  })
})
