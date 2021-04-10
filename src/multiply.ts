import { Curried } from '@/types'
import { isUndefined } from '@/utils'

/**
 * Multiplies two numbers.
 *
 * @func
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @example
 *  multiply(2, 3) //=> 6
 *  const double = multiply(2)
 *  double(4) //=> 8
 */
const multiply = <T extends number | undefined = undefined>(
  a: number,
  b?: T
): Curried<T> => {
  if (isUndefined(b)) return ((_b: number) => multiply(a, _b)) as Curried<T>

  return (a * (b as number)) as Curried<T>
}
export { multiply }
