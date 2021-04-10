import { Curried } from '@/types'
import { isUndefined } from '@/utils'

/**
 * Subtracts second argument from first argument.
 *
 * @func
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @example
 *
 *  subtract(2, 1) //=> 1
 *  const minus5 = subtract(5)
 *  minus5(10) //=> -5
 */
const subtract = <T extends number | undefined = undefined>(
  a: number,
  b?: T
): Curried<T> => {
  if (isUndefined(b)) return ((_b: number) => subtract(a, _b)) as Curried<T>

  return (a - (b as number)) as Curried<T>
}

export { subtract }
