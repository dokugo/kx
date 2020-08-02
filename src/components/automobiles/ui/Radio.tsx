import React, { FC } from 'react'
import { CarColor } from 'store/automobile/types'
import styled from 'styled-components/macro'

interface Props {
  color: string
  value: CarColor
  activeValue: CarColor
  updateActiveValue: (input: CarColor) => void
}

const RadioComponent: FC<Props> = ({
  color,
  value,
  activeValue,
  updateActiveValue,
}) => {
  const isActive = value === activeValue

  const handleClick = (event: React.MouseEvent<HTMLLabelElement>): void => {
    if ((event.target as HTMLLabelElement).tagName === 'LABEL') {
      updateActiveValue(value)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      updateActiveValue(value)
    }
  }

  return (
    <Container>
      <Label
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        isActive={isActive}
        color={color}
        tabIndex={0}
        htmlFor={value}
      >
        <Radio id={value} tabIndex={-1} type="radio" />
      </Label>
    </Container>
  )
}

export default RadioComponent

const Container = styled.section`
  display: flex;
  height: 20px;
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }
`
const Radio = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`

const Label = styled.label<{ isActive: boolean; color: string }>`
  align-items: center;
  box-sizing: border-box;
  color: ${({ theme }): string => theme.colors.black};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  margin: 0;
  position: relative;
  user-select: none;

  &::before {
    background: ${(props): string => props.color};
    box-shadow: 0 0 0 1px
      ${({ color }): string => (color === '#fff' ? '#e0e0e0' : 'transparent')};
    border-radius: 50%;
    box-sizing: border-box;
    content: '';
    display: block;
    height: 20px;
    left: 0;
    position: relative;
    top: 0;
    transition-duration: ${({ theme }): string => theme.animation.fast};
    transition-timing-function: ${({ theme }): string => theme.animation.func};
    width: 20px;
  }

  &::after {
    background: ${(props): string => props.color};
    box-shadow: 0 0 0 4px
      ${({ isActive }): string => (isActive ? '#c4092f' : 'transparent')};
    border-radius: 50%;
    box-sizing: border-box;
    content: '';
    display: block;
    height: 20px;
    left: 0;
    position: absolute;
    top: 0;
    transition-duration: ${({ theme }): string => theme.animation.fast};
    transition-timing-function: ${({ theme }): string => theme.animation.func};
    width: 20px;
  }

  &:active {
    outline: none;
  }
`
