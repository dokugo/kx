import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'
import { createGlobalStyle } from 'styled-components/macro'

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
    </>
  )
}

export default hot(App)

const GlobalStyle = createGlobalStyle` 
  body {
    margin: 0;
    /* background: ${({ theme }): string => theme.colors.body}; */
    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`
