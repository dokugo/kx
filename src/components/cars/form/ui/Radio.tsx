import React, { FC } from 'react'
import { CarColor } from 'store/cars/types'
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
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  margin: 0;
  position: relative;
  transition-duration: ${({ theme }): string => theme.animation.fast};
  transition-timing-function: ${({ theme }): string => theme.animation.func};
  user-select: none;

  &::before {
    background: ${({ color }): string => color};
    border-radius: 50%;
    box-shadow: 0 0 0 1px
      ${({ color, theme }): string =>
        color === theme.color.white ? theme.color.darkwhite : 'transparent'};
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
    background: ${({ color }): string => color};
    border-radius: 50%;
    box-shadow: 0 0 0 4px
      ${({ isActive, theme }): string =>
        isActive ? theme.color.red : 'transparent'};
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

  &:focus {
    box-shadow: 0 0 0 4px ${({ theme }): string => theme.color.black};
    outline: none;
  }

  &:active {
    outline: none;

    &:focus {
      box-shadow: none;
    }
  }
`
