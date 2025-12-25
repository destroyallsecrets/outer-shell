'use client'
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [s] = useState(() => new ServerStyleSheet())
  useServerInsertedHTML(() => {
      const styles = s.getStyleElement()
      s.instance.clearTag()
      return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>
  return <StyleSheetManager sheet={s.instance}>{children}</StyleSheetManager>
}