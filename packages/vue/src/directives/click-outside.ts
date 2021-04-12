import { key, kkey } from '@share/constants'
import { Directive } from 'vue'
interface ExtendHTMLElement extends HTMLElement {
  [key]: any
  [kkey]: any
}

const clickOutside: Directive<ExtendHTMLElement> = {
  beforeMount(el, binding) {
    let startedSource = false

    el[key] = ({ target }: Event) => {
      if (el.contains(target as Node)) {
        startedSource = true
      }
    }

    el[kkey] = (e: Event) => {
      if (!el.contains(e.target as Node) && binding.value && !startedSource) {
        binding.value(e)
      }
      startedSource = false
    }

    document.addEventListener('mousedown', el[key])
    document.addEventListener('mouseup', el[kkey])
  },
  unmounted(el) {
    document.removeEventListener('mouseup', el[kkey])
    document.removeEventListener('mousedown', el[kkey])
  }
}

export { clickOutside }
