export type Curried<T> = T extends number
  ? number
  : T extends undefined
  ? (b: number) => number
  : never
