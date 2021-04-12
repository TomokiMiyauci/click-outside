/* eslint-disable @typescript-eslint/no-explicit-any */
import { key } from '@share/constants'
import type { AnyFn } from '@share/types'
import { isEqual } from '@share/utils'
import { Directive, DirectiveHook } from 'vue'

type Binding = undefined | unknown | AnyFn
const WARNING = '[v-click-outside]: binding value must be set function'

interface ExtendedNode extends Node {
  [key]?: AnyFn
}
const updated: DirectiveHook<ExtendedNode> = (el, binding, vnode, oldVnode) => {
  const { value, oldValue } = binding
  if (isEqual(value, oldValue)) {
    return
  }
  onMount(el, binding, vnode, oldVnode)
}
const onMount: DirectiveHook<ExtendedNode, any, Binding> = (
  el,
  binding,
  vnode,
  oldVnode
) => {
  const { value: fn } = binding
  if (typeof fn !== 'function') {
    console.warn(WARNING)
    return
  }
  onUnmounted(el, binding, vnode, oldVnode)

  el[key] = (event: Event) => {
    if (!el.contains(event.target as Node)) {
      return fn.call((vnode as any).context, event)
    }
  }
  if (el[key]) {
    document.addEventListener('click', el[key] as AnyFn)
  }
}
const onUnmounted: DirectiveHook<ExtendedNode> = (el) => {
  if (el[key]) {
    document.removeEventListener('click', el[key] as AnyFn)
    delete el[key]
  }
}
const clickOutside: Directive = {
  beforeMount: onMount,
  updated,
  unmounted: onUnmounted
}

export { clickOutside }
