import { isUndefined } from '@/utils'

describe('isUndefined', () => {
  const table: [unknown, boolean][] = [
    ['', false],
    [1, false],
    [new Date(), false],
    [{}, false],
    [[], false],
    [undefined, true]
  ]
  it.each(table)('ff', (val, expected) => {
    expect(isUndefined(val)).toBe(expected)
  })
})
