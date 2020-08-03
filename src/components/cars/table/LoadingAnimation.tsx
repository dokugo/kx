import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components/macro'

const LoadingAnimation: FC = () => {
  return (
    <Dots>
      <Dot>·</Dot>
      <Dot>·</Dot>
      <Dot>·</Dot>
    </Dots>
  )
}

export default LoadingAnimation

const blink = keyframes`
  0% {
    opacity: 0.15;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.15;
  }
`

const Dots = styled.div`
  display: flex;
  justify-content: center;
  user-select: none;
`

const Dot = styled.i`
  animation: 1s infinite both;
  animation-name: ${blink};
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  padding: 0 5px;

  &:nth-of-type(2) {
    animation-delay: 0.2s;
  }

  &:nth-of-type(3) {
    animation-delay: 0.4s;
  }
`
