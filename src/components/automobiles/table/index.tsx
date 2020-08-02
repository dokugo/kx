import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components/macro'

import { tableColor, tableStatus } from './constants'

interface Car {
  color: string
  description: string
  id: number
  price: string
  status: string
  title: string
  year: number
}

const sleep = (time: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, time))

const TableComponent: FC = () => {
  const handleClick = (id: number): void => {
    console.log(id)
    const newState = state.filter((item) => item.id !== id)
    setState(newState)
  }

  const [state, setState] = useState<Car[]>([])

  useEffect(() => {
    const getTableData = async (): Promise<Car[]> => {
      await sleep(1)
      const response = await fetch(
        'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json'
      )
      const data = await response.json()
      return data
    }

    const parseFunction = (item: Car): Car => {
      const priceByThousand = Number(item.price).toLocaleString('ru')

      return item.status === 'pednding'
        ? { ...item, status: 'pending', price: priceByThousand }
        : { ...item, price: priceByThousand }
    }

    getTableData().then((data) => {
      const parsedData = data.map(parseFunction)
      setState(parsedData)
    })
  }, [])

  const renderTable = state.map((item) => {
    return (
      <Row key={item.id}>
        <ItemFixed>
          <CarTitle>{item.title}</CarTitle>
          <CarDescription>{item.description}</CarDescription>
        </ItemFixed>
        <Item>{item.year}</Item>
        <Item>
          <CarColor color={tableColor[item.color]} />
        </Item>
        <Item>{tableStatus[item.status]}</Item>
        <Item>{item.price} руб.</Item>
        <Item>
          <DeleteButton onClick={(): void => handleClick(item.id)}>
            Удалить
          </DeleteButton>
        </Item>
      </Row>
    )
  })

  const tableData = state.length ? (
    renderTable
  ) : (
    <Row>
      <Item colSpan={6} center>
        Сейчас нет автомобилей в наличии
      </Item>
    </Row>
  )

  return (
    <Container>
      <TitleBox>
        <Title>Автомобили в наличии</Title>
      </TitleBox>
      <TableBox>
        <RoundBorderWrapper>
          <Table>
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
            <Body>{tableData}</Body>
          </Table>
        </RoundBorderWrapper>
      </TableBox>
    </Container>
  )
}

export default TableComponent

const Container = styled.section``

const TitleBox = styled.div``

const Title = styled.h3`
  color: #282d30;
  font-size: 20px;
  font-weight: bold;
  line-height: 18px;
  margin: 0;
  padding-left: 15px;
  position: relative;
  text-transform: uppercase;

  &::before {
    background: #8b9497;
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
  border-spacing: 0;
  width: 960px;
`

const Header = styled.thead`
  background: #c4092f;
`

const HeaderRow = styled.tr`
  height: 45px;
`

const HeaderItem = styled.th`
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  padding: 0 15px;
  text-align: left;
`

const Body = styled.tbody``

const Row = styled.tr`
  background: #f5f6f6;

  &:hover {
    background: #e6e9ea;
  }

  &:last-of-type {
    &last-child {
      background: red;
      border-bottom-right-radius: 20px;
    }
  }
`

const Item = styled.td<{ center?: boolean }>`
  border-bottom: 1px solid #e6e9ea;
  box-sizing: border-box;
  color: #282d30;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.5;
  padding: 12px 15px;
  text-align: ${(props): string => (props.center ? 'center' : 'left')};
  white-space: nowrap;
`

const ItemFixed = styled(Item)`
  max-width: 460px;
  white-space: normal;
`

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #8b9497;
  cursor: pointer;
  font-family: 'Roboto', 'Open Sans', 'Segoe UI', 'Verdana', 'Calibri',
    'Trebuchet MS', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  outline: 0;
  padding: 0 15px;
  position: relative;
  transition-duration: ${({ theme }): string => theme.animation.fast};
  transition-timing-function: ${({ theme }): string => theme.animation.func};
  user-select: none;
  width: 85px;
  z-index: 11;

  &::after {
    background-color: #000;
    content: '';
    display: block;
    opacity: 0;
    height: 30px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 85px;
    border-radius: 15px;
    z-index: -1;
    transition-duration: ${({ theme }): string => theme.animation.fast};
    transition-timing-function: ${({ theme }): string => theme.animation.func};
  }

  &:hover {
    color: #fff;

    &::after {
      opacity: 1;
    }
  }
`
const CarColor = styled.span<{ color: string }>`
  background: ${(props): string => props.color};
  border-radius: 50%;
  box-shadow: 0 0 0 1px
    ${(props): string =>
      props.color === tableColor.white ? '#e0e0e0' : 'transparent'};
  display: block;
  height: 20px;
  width: 20px;
`
const CarTitle = styled.span`
  display: block;
`

const CarDescription = styled.span`
  color: #8b9497;
  display: block;
  font-size: 13px;
`
