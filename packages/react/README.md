# @miyauci/react-click-outside

![npm version](https://img.shields.io/npm/v/@miyauci/react-click-outside.svg?style=flat)
![bundle size](https://img.shields.io/bundlephobia/min/@miyauci/react-click-outside)
![npm download](https://img.shields.io/npm/dw/@miyauci/react-click-outside?color=blue)
![npm type definitions](https://img.shields.io/npm/types/@miyauci/react-click-outside)
![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat)
![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## :truck: Install

```bash
npm i -s @miyauci/react-click-outside
or
yarn add @miyauci/react-click-outside
```

## :bulb: Usage

This provides React Custom Hooks.

```tsx
import React, { useRef } from 'react'
import { useClickOutside } from '@miyauci/react-click-outside'

const App: FC = () => {
  const ref = useRef<HTMLElement>(null)
  const onClick = () => console.log('Outside clicked')

  useClickOutside(ref, onClick)

  return (
    <div>
      Outer
      <div ref={ref}>
        <div>Inter</div>
      </div>
    </div>
  )
}
```

## :revolving_hearts: Related

- [@miyauci/vue-click-outside](../vue)
