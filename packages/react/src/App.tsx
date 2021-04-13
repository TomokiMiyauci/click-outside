import React, { FC, useRef } from 'react'

import { useClickOutside } from '@/hooks'

const App: FC = () => {
  const ref = useRef<HTMLElement>()
  const onClose = () => console.log(1)

  useClickOutside(ref, onClose)

  return <div ref={ref}>Hello, World!</div>
}

export default App
