import { divide } from '@/divide'

describe('divide', () => {
  const table: [number, number, number][] = [
    [1, 1, 1],
    [100, 200, 0.5],
    [0, 0, NaN],
    [-1, -2, 0.5],
    [-1, 100, -0.01]
  ]
  it.each(table)('divide(%d, %d) => %d', (a, b, expected) => {
    expect(divide(a, b)).toBe(expected)
  })

  it.each(table)('divide(%d)(%d) => %d', (a, b, expected) => {
    expect(divide(a)(b)).toBe(expected)
  })
})
