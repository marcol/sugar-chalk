import { describe, expect, it } from 'vitest'
import { silent } from '../src/index'

describe('tests silencing functionality', () => {
  it('tests silence on', () => {
    expect(silent(true)).toBeTruthy()
  })

  it('tests silence off', () => {
    expect(silent(false)).toBeFalsy()
  })
})
