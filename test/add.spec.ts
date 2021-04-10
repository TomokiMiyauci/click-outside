import { add } from '@/add'

describe('add', () => {
  const table: [number, number, number][] = [
    [1, 1, 2],
    [100, 200, 300],
    [0, 0, 0],
    [-1, -2, -3],
    [-1, 100, 99]
  ]
  it.each(table)('add(%d, %d) => %d', (a, b, expected) => {
    expect(add(a, b)).toBe(expected)
  })

  it.each(table)('add(%d)(%d) => %d', (a, b, expected) => {
    expect(add(a)(b)).toBe(expected)
  })
})
