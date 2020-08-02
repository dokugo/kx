import React, { FC } from 'react'
import styled from 'styled-components/macro'

interface Props {
  handlerFunction: () => void
}

const Button: FC<Props> = ({ handlerFunction }) => {
  return <ButtonElement onClick={handlerFunction}>Отправить</ButtonElement>
}

export default Button

const ButtonElement = styled.button`
  background-color: #c4092f;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-family: 'Roboto', 'Open Sans', 'Segoe UI', 'Verdana', 'Calibri',
    'Trebuchet MS', sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0;
  text-transform: uppercase;
  transition-duration: ${({ theme }): string => theme.animation.fast};
  transition-timing-function: ${({ theme }): string => theme.animation.func};
  user-select: none;
  width: 306px;

  &:hover {
    background-color: #d01919;
    color: #fff;
    text-shadow: none;
  }

  &:focus {
    background-color: #ca1010;
    color: #fff;
    text-shadow: none;
    border-radius: 3px;
    box-shadow: 0 0 0 3px rgba(180, 30, 30, 0.2);
  }

  &:active {
    background-color: #b21e1e;
    color: #fff;
    text-shadow: none;
  }
`
