export type Curried<T> = T extends undefined
  ? (b: number) => number
  : T extends number
  ? number
  : never
