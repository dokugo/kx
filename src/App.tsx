import React, { FC } from 'react'
import { hot } from 'react-hot-loader/root'

import { Automobiles } from './components'
import {
  Container,
  Footer,
  GlobalStyle,
  Header,
  Main,
} from './components/layout'

const App: FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main>
        <Automobiles />
      </Main>
      <Footer />
    </Container>
  )
}

export default hot(App)
