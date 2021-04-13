import { MutableRefObject, useEffect, useRef } from 'react'

type ListenerEvent = MouseEvent & {
  target: Element
}

const useClickOutside = <T extends Element>(
  ref: MutableRefObject<T | undefined>,
  callback: (event: MouseEvent) => void,
  eventType = 'click' as const
): void => {
  const handlerRef = useRef(callback)

  useEffect(() => {
    handlerRef.current = callback
  })

  useEffect(() => {
    const listener = (event: ListenerEvent) => {
      if (ref && ref.current) {
        if (event.target.shadowRoot) {
          if (!event.target.shadowRoot.contains(ref.current)) {
            handlerRef.current(event)
          }
        } else {
          if (!ref.current.contains(event.target)) {
            handlerRef.current(event)
          }
        }
      }
    }

    document.addEventListener(eventType, listener as () => void)

    return () => document.removeEventListener(eventType, listener as () => void)
  })
}

export { useClickOutside }
