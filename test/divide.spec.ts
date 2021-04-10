import { multiply } from '@/multiply'

describe('multiply', () => {
  const table: [number, number, number][] = [
    [1, 1, 1],
    [100, 200, 20000],
    [0, 0, 0],
    [-1, -2, 2],
    [-1, 100, -100]
  ]
  it.each(table)('multiply(%d, %d) => %d', (a, b, expected) => {
    expect(multiply(a, b)).toBe(expected)
  })

  it.each(table)('multiply(%d)(%d) => %d', (a, b, expected) => {
    expect(multiply(a)(b)).toBe(expected)
  })
})
