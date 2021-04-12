import { DEFAULT_NAME } from '@share/constants'
import { Plugin } from 'vue'

import { clickOutside } from '@/directives'

const plugin: Plugin = {
  install: (app) => {
    app.directive(DEFAULT_NAME, clickOutside)
  }
}
const mixin = {
  directives: { ClickOutside: clickOutside }
}

export { clickOutside as directive, mixin }
export default plugin
