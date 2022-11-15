import { describe, expect, it } from 'vitest'
import { chalk } from '../src/index'
import original from 'chalk'

process.env.TEST = true

describe('tests chalk functionality', () => {
  it('checks chalk method is chalk', () => {
    expect(chalk).toEqual(original)
  })
})
