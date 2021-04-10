import { Curried } from '@/types'
import { isUndefined } from '@/utils'

/**
 * Adds two values.
 *
 * @func
 * @sig Number -> Number -> Number
 * @param { Number } a
 * @param { Number | undefined} b
 * @return {Number} The result of `a + b`.
 * @example
 *
 *  add(1, 2) //=> 3
 *  const add2 =add(2)
 *  add2(100) //=> 102
 */
const add = <T extends number | undefined = undefined>(
  a: number,
  b?: T
): Curried<T> => {
  if (isUndefined(b)) return ((_b: number) => add(a, _b)) as Curried<T>

  return (a + (b as number)) as Curried<T>
}

export { add }
