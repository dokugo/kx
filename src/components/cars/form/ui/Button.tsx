import React, { FC } from 'react'
import styled from 'styled-components/macro'
import Transition from 'utils/transition'

interface Props {
  isInvalidFormData: boolean
  handlerFunction: () => void
}

const errorMessage = 'Пожалуйста, заполните все поля формы'

const ButtonComponent: FC<Props> = ({ isInvalidFormData, handlerFunction }) => {
  return (
    <>
      <ButtonElement onClick={handlerFunction}>
        <Text>Отправить</Text>
      </ButtonElement>
      <Transition condition={isInvalidFormData}>
        <Tooltip>{errorMessage}</Tooltip>
      </Transition>
    </>
  )
}

export default ButtonComponent

const ButtonElement = styled.button`
  background: ${({ theme }): string => theme.color.red};
  border: none;
  border-radius: 3px;
  color: ${({ theme }): string => theme.color.white};
  cursor: pointer;
  font-family: 'Roboto', 'Open Sans', 'Segoe UI', 'Verdana', 'Calibri',
    'Trebuchet MS', sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0;
  text-transform: uppercase;
  transition-duration: ${({ theme }): string => theme.animation.fast};
  transition-timing-function: ${({ theme }): string => theme.animation.func};
  user-select: none;
  width: 100%;

  &:hover {
    background: ${({ theme }): string => theme.color.darkred};
    color: ${({ theme }): string => theme.color.white};
    text-shadow: none;
  }

  &:focus {
    background: ${({ theme }): string => theme.color.darkred};
    border-radius: 3px;
    color: ${({ theme }): string => theme.color.white};
  }

  &:active {
    background: ${({ theme }): string => theme.color.maroon};
    color: ${({ theme }): string => theme.color.white};
  }
`

const Text = styled.span`
  position: relative;

  &::after {
    border-right: 3px solid ${({ theme }): string => theme.color.white};
    border-top: 3px solid ${({ theme }): string => theme.color.white};
    content: '';
    display: block;
    height: 6px;
    position: absolute;
    right: -15px;
    top: calc(50% - 4px);
    transform: rotate(45deg);
    width: 6px;
  }
`

const Tooltip = styled.span`
  bottom: -16px;
  color: ${({ theme }): string => theme.color.darkred};
  display: block;
  font-size: 11px;
  font-weight: 400;
  position: absolute;
  text-transform: initial;
  width: max-content;
`
