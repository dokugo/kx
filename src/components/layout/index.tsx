import React, { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyle = createGlobalStyle` 
  body {
    background: ${({ theme }): string => theme.color.white};
    font-family: 'Roboto', 'Open Sans', 'Segoe UI', 'Verdana', 'Calibri', 'Trebuchet MS', sans-serif;
    margin: 0;
  }
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Header: FC = () => {
  return (
    <HeaderElement>
      <Logo src="img/duck.png" />
    </HeaderElement>
  )
}

const HeaderElement = styled.header`
  background: ${({ theme }): string => theme.color.lightblack};
  display: flex;
  height: 100px;
  justify-content: center;
`

const Logo = styled.img`
  height: 104px;
  max-width: 100%;
  position: relative;
  top: 5px;
  width: 494px;
`

export const Main = styled.main`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 10px;
  width: 980px;

  @media (max-width: 980px) {
    width: 720px;
  }
`

const FooterElement = styled.footer`
  align-items: center;
  background: ${({ theme }): string => theme.color.lightblack};
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
`

const FooterTextItem = styled.span`
  color: ${({ theme }): string => theme.color.lightgrey};
  font-size: 11px;
`

export const Footer: FC = () => {
  return (
    <FooterElement>
      <FooterTextItem>© 2015 CAPTAIN QUACK</FooterTextItem>
      <FooterTextItem>Десница тысячелетия и моллюск!</FooterTextItem>
    </FooterElement>
  )
}
