<div align="center">
  <img width="180" src="../../docs/public/logo-vue.png" alt="logo image" />

![npm version](https://img.shields.io/npm/v/@miyauci/vue-click-outside.svg?style=flat)
![bundle size](https://img.shields.io/bundlephobia/min/@miyauci/vue-click-outside)
![npm download](https://img.shields.io/npm/dw/@miyauci/vue-click-outside?color=blue)
![npm type definitions](https://img.shields.io/npm/types/@miyauci/vue-click-outside)
![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat)
![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

# @miyauci/vue-click-outside

> vue directive for outside click

## :truck: Install

```bash
npm i -s @miyauci/vue-click-outside
or
yarn add @miyauci/vue-click-outside
```

## :bulb: Usage

This provides 3 way Usage.

### Global directive

It can be used with all components.

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { plugin } from '@miyauci/vue-click-outside'

const app = createApp(App)

app.use(plugin()) // 'v-click-outside' directive usable by default.
// Or you can customize directive name => 'v-click-out'
app.use(
  plugin({
    name: 'ClickOut' // PascalCase
  })
)
app.mount('#app')
```

template

```html
<template>
  <div v-click-outside="onClickOut">...</div>
</template>
```

#### Options API

```ts
<script lang="ts">
export default {
  methods: {
    onClickOut(event) {
      console.log(event)
    }
  }
}
</script>
```

#### Composition API

```ts
<script setup lang="ts">
const onClickOut = (event) => console.log(evnet)
</script>
```

### Directive

```ts
<script lang="ts">
import { defineComponent } from 'vue'
import { directive } from '@miyauci/vue-click-outside'

export default defineComponent({
  directives: {
    ClickOutside: directive
  },
  setup() {
    return {
      onClickOut: (e) => console.log(e)
    }
  }
})
</script>
```

### Mixin

```ts
<script lang="ts">
import { defineComponent } from 'vue'
import { mixin } from '@miyauci/vue-click-outside'
export default defineComponent({
  mixins: [mixin]

  setup() {
    return {
      onClickOut: (e) => console.log(e)
    }
  }
}
</script>
```

## :revolving_hearts: Related

- [@miyauci/react-click-outside](../react)
