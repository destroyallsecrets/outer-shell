'use client'
import React from 'react'
import { Frame } from 'react95'; import { ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body { background-color: #202020; margin: 0; padding: 0; font-family: 'ms_sans_serif'; }
`
export default function Home() {
  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <Frame variant='well' style={{ padding: '20px', color: 'white', backgroundColor: '#202020', height: '100vh' }}>
        <h1>Oqter Heaven: Oqter Shell</h1>
        <p>Virtqal Desktop Environment (Web Version)</p>
      </Frame>
    </ThemeProvider>
  )
}