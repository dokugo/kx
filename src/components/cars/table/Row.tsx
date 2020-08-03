import React, { FC } from 'react'
import { Car } from 'store/cars/types'
import styled from 'styled-components/macro'

import { carColor, carStatus } from '../constants'

interface Props {
  data: Car
  removeCar: (id: string) => void
}

const TableRow: FC<Props> = React.memo(({ data, removeCar }) => {
  const handleClick = (id: string): void => removeCar(id)

  return (
    <RowElement key={data.id}>
      <ItemFixed>
        <CarTitle>{data.title}</CarTitle>
        <CarDescription>{data.description}</CarDescription>
      </ItemFixed>
      <Item>{data.year}</Item>
      <Item center>
        <CarColor color={carColor[data.color]} />
      </Item>
      <Item>{carStatus[data.status]}</Item>
      <Item>{data.price} руб.</Item>
      <Item>
        <DeleteButton onClick={(): void => handleClick(data.id)}>
          Удалить
        </DeleteButton>
      </Item>
    </RowElement>
  )
})

TableRow.displayName = 'TableRow'

export default TableRow

export const RowElement = styled.tr`
  background: ${({ theme }): string => theme.color.semiwhite};

  &:hover {
    background: ${({ theme }): string => theme.color.darkwhite};
  }

  &:last-of-type {
    &last-child {
      background: red;
      border-bottom-right-radius: 20px;
    }
  }
`

export const Item = styled.td<{ center?: boolean }>`
  border-bottom: 1px solid ${({ theme }): string => theme.color.darkwhite};
  box-sizing: border-box;
  color: ${({ theme }): string => theme.color.lightblack};
  font-size: 15px;
  font-weight: 300;
  line-height: ${({ center }): string => (center ? '0%' : '1.5')};
  padding: 12px 15px;
  text-align: ${({ center }): string => (center ? 'center' : 'left')};
  vertical-align: top;
  white-space: nowrap;

  @media (max-width: 980px) {
    padding: 12px 5px;
  }

  &:first-of-type {
    padding-left: 10px;
  }

  &:last-of-type {
    padding-right: 10px;
  }
`

const ItemFixed = styled(Item)`
  max-width: 460px;
  white-space: normal;

  @media (max-width: 980px) {
    max-width: 270px;
  }
`

export const ItemSingle = styled(Item)`
  line-height: 1.5;
  text-align: center;
`

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }): string => theme.color.darkgrey};
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
    background: ${({ theme }): string => theme.color.black};
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
    color: ${({ theme }): string => theme.color.white};

    &::after {
      opacity: 1;
    }
  }
`

const CarColor = styled.span<{ color: string }>`
  background: ${({ color }): string => color};
  border-radius: 50%;
  box-shadow: 0 0 0 1px
    ${({ color, theme }): string =>
      color === theme.color.white ? theme.color.darkwhite : 'transparent'};
  display: inline-flex;
  height: 20px;
  width: 20px;
`

const CarTitle = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const CarDescription = styled.span`
  color: ${({ theme }): string => theme.color.darkgrey};
  display: block;
  font-size: 13px;
`
