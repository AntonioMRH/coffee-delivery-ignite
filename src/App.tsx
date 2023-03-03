import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CoffeeCtxProvider } from './contexts/CoffeeCtx'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeCtxProvider>
          <Router />
        </CoffeeCtxProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
