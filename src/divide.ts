import { Curried } from '@/types'
import { isUndefined } from '@/utils'

/**
 * Divides two numbers.
 *
 * @func
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @example
 *
 *  divide(10, 100) //=> 0.1
 *  const half = divide(2)
 *  half(20) //=> 10
 */
const divide = <T extends number | undefined = undefined>(
  a: number,
  b?: T
): Curried<T> => {
  if (isUndefined(b)) return ((_b: number) => divide(a, _b)) as Curried<T>

  return (a / (b as number)) as Curried<T>
}
export { divide }
