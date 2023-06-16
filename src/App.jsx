import { useState } from 'react'
import { GlobalStyle } from './styles/globalStyles'
import { Reset } from './styles/Reset'
import { RoutesMain } from './routes/RoutesMain'

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <main>
        <RoutesMain />
      </main>
    </>
  )
}

export default App
