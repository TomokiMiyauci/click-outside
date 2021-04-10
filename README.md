# arithmetic4

[![codecov](https://codecov.io/gh/TomokiMiyauci/arithmetic4/branch/main/graph/badge.svg?token=SPAi5Pv2wd)](https://codecov.io/gh/TomokiMiyauci/arithmetic4)
![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat)
![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

> Type-safe curried arithmetic functions

## Feature

- Provide ESM and UMD module
- Pure TypeScript
- Super Slim size
- Curried

## Install

```bash
npm i arithmetic4
or
yarn add arithmetic4
```

## API

type

```ts
type Curried<T> = T extends number
  ? number
  : T extends undefined
  ? (b: number) => number
  : never
```

### add

> Adds two values.

#### types

```ts
declare const add: <T extends number | undefined = undefined>(
  a: number,
  b?: T | undefined
) => Curried<T>
```

#### Example

```ts
import { add } from 'arithmetic4'

add(1, 2) //=> 3
const add2 = add(2)
add2(100) //=> 102
```

### subtract

> Subtracts second argument from first argument.

#### types

```ts
declare const subtract: <T extends number | undefined = undefined>(
  a: number,
  b?: T | undefined
) => Curried<T>
```

#### Example

```ts
import { subtract } from 'arithmetic4'

subtract(2, 1) //=> 1
const minus5 = subtract(5)
minus5(10) //=> -5
```

### multiply

> Multiplies two numbers.

#### types

```ts
declare const multiply: <T extends number | undefined = undefined>(
  a: number,
  b?: T | undefined
) => Curried<T>
```

#### Example

```ts
import { multiply } from 'arithmetic4'

multiply(2, 3) //=> 6
const double = multiply(2)
double(4) //=> 8
```

### divide

> Divides two numbers.

#### types

```ts
declare const divide: <T extends number | undefined = undefined>(
  a: number,
  b?: T | undefined
) => Curried<T>
```

#### Example

```ts
import { add } from 'arithmetic4'

divide(10, 100) //=> 0.1
const half = divide(2)
half(20) //=> 10
```

## License

[MIT](./LICENSE)
