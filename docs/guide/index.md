---
head:
  - - link
    - rel: canonical
      href: https://arithmetic4.web.app/guide
  - - link
    - rel: alternate
      hreflang: en
      href: https://arithmetic4.web.app/guide
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://arithmetic4.web.app/guide
---

## :question: Why

### The motivation

This is just arithmetic functions.

Characteristically, it is curried and provides a type declaration.
Depending on the number of arguments, Conditional types allow you to make correct type inferences. That's all :full_moon_with_face:

That's it, but if you look at this little TypeScript library,
You can see the whole library production.

- hint with [`JsDocs`](https://jsdoc.app/)
- lint with [`ESLint`](https://eslint.org/) and [`Commitlint`](https://commitlint.js.org/#/)
- test with [`Jest`](https://jestjs.io/)
- bundle (+ declaration bundle) with [`Rollup`](https://rollupjs.org/guide/en/)
- workflow with [`Github Actions`](https://docs.github.com/actions)
- release with [`semantic-release`](https://semantic-release.gitbook.io/semantic-release/)
- docs with [`vitepress`](https://vitepress.vuejs.org/)

## :seedling: Release Notes

Latest version: ![npm](https://img.shields.io/npm/v/arithmetic4?color=blue)

Detailed release notes for each version are available on [GitHub](https://github.com/TomokiMiyauci/arithmetic4/blob/main/CHANGELOG.md).

## :rocket: Getting Started

### CDN

`arithmetic4` provides UMD and ESM.  
For prototyping and learning purposes, the latest version is available as follows:

#### UMD

```html
<script src="https://unpkg.com/arithmetic4"></script>

<script>
  console.log(Arithmetic.add(1, 2)) //=> 3
</script>
```

#### ESM

```html
<script type="module">
  import { add } from 'https://unpkg.com/arithmetic4?module'
  console.log(add(1, 2)) //=> 3
</script>
```

### NPM

with Yarn

```bash
yarn add -D arithmetic4
```

with NPM

```bash
npm i -D arithmetic4
```

## :memo: API

### add

> Adds two values.

#### Example

```ts
import { add } from 'arithmetic4'

add(1, 2) //=> 3
const add2 = add(2)
add2(100) //=> 102
```

### subtract

> Subtracts second argument from first argument.

#### Example

```ts
import { subtract } from 'arithmetic4'

subtract(2, 1) //=> 1
const minus5 = subtract(5)
minus5(10) //=> -5
```

### multiply

> Multiplies two numbers.

#### Example

```ts
import { multiply } from 'arithmetic4'

multiply(2, 3) //=> 6
const double = multiply(2)
double(4) //=> 8
```

### divide

> Divides two numbers.

#### Example

```ts
import { add } from 'arithmetic4'

divide(10, 100) //=> 0.1
const half = divide(2)
half(20) //=> 10
```
