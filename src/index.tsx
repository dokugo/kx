import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components/macro'

import App from './App'
import store from './store'
import theme from './theme'

const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  rootElement
)
