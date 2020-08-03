import React, { FC } from 'react'
import styled from 'styled-components/macro'

const TableHeader: FC = () => {
  return (
    <Header>
      <HeaderRow>
        <HeaderItem>Название</HeaderItem>
        <HeaderItem>Год</HeaderItem>
        <HeaderItem>Цвет</HeaderItem>
        <HeaderItem>Статус</HeaderItem>
        <HeaderItem>Цена</HeaderItem>
        <HeaderItem></HeaderItem>
      </HeaderRow>
    </Header>
  )
}

export default TableHeader

const Header = styled.thead`
  background: ${({ theme }): string => theme.color.red};
`

const HeaderRow = styled.tr`
  height: 45px;
`

const HeaderItem = styled.th`
  color: ${({ theme }): string => theme.color.white};
  font-size: 15px;
  font-weight: 400;
  padding: 0 15px;
  text-align: left;

  @media (max-width: 980px) {
    padding: 0 8px;
  }

  &:first-of-type {
    padding-left: 10px;
  }

  &:last-of-type {
    padding-right: 10px;
  }
`
