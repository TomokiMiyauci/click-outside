import { subtract } from '@/substract'

describe('subtract', () => {
  const table: [number, number, number][] = [
    [1, 1, 0],
    [100, 200, -100],
    [0, 0, 0],
    [-1, -2, 1],
    [-1, 100, -101]
  ]
  it.each(table)('subtract(%d, %d) => %d', (a, b, expected) => {
    expect(subtract(a, b)).toBe(expected)
  })

  it.each(table)('subtract(%d)(%d) => %d', (a, b, expected) => {
    expect(subtract(a)(b)).toBe(expected)
  })
})
