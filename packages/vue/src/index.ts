import { DEFAULT_NAME } from '@share/constants'
import { Plugin } from 'vue'

import { clickOutside } from '@/directives'

type Options = {
  name: string
}
const plugin = ({ name = DEFAULT_NAME }: Partial<Options>): Plugin => ({
  install: (app) => {
    app.directive(name, clickOutside)
  }
})
const mixin = {
  directives: { ClickOutside: clickOutside }
}

export { clickOutside as directive, mixin, plugin }
