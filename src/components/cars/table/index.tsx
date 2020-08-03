import React, { FC, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { requestCars } from 'store/cars/thunks'
import styled from 'styled-components/macro'

import Body from './Body'
import Header from './Header'

const TableComponent: FC<StoreProps> = ({ requestCars }) => {
  useEffect(() => {
    requestCars()
  }, [requestCars])

  return (
    <Container>
      <TitleBox>
        <Title>Автомобили в наличии</Title>
      </TitleBox>
      <TableBox>
        <RoundBorderWrapper>
          <Table cellSpacing="0" cellPadding="0">
            <Header />
            <Body />
          </Table>
        </RoundBorderWrapper>
      </TableBox>
    </Container>
  )
}

const mapDispatch = { requestCars }

const connector = connect(null, mapDispatch)

type StoreProps = ConnectedProps<typeof connector>

export default connector(TableComponent)

const Container = styled.section``

const TitleBox = styled.div``

const Title = styled.h3`
  color: ${({ theme }): string => theme.color.lightblack};
  font-size: 20px;
  font-weight: bold;
  line-height: 18px;
  margin: 0;
  padding-left: 15px;
  position: relative;
  text-transform: uppercase;

  &::before {
    background: ${({ theme }): string => theme.color.darkgrey};
    content: '';
    display: block;
    height: 20px;
    left: 0;
    position: absolute;
    top: -1px;
    width: 3px;
  }
`

const RoundBorderWrapper = styled.div`
  border-radius: 3px;
  overflow: auto;
`

const TableBox = styled.div`
  margin-top: 28px;
`

const Table = styled.table`
  border: none;
  border-spacing: 0;
  width: 960px;

  @media (max-width: 980px) {
    width: 700px;
  }
`
