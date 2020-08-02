import React, { FC } from 'react'
import TransitionUtil from 'react-transition-group/Transition'
import styled from 'styled-components/macro'
import theme, { BASIC_TRANSITION_TIME_NUMERIC } from 'theme'

const AnimatedBox = styled.section<{ transition: string }>`
  opacity: ${({ transition }): number =>
    transition === 'entering'
      ? 0
      : transition === 'entered'
      ? 1
      : transition === 'exiting'
      ? 0
      : transition === 'exited'
      ? 0
      : 0};
  transition-duration: ${theme.animation.fast};
  transition-timing-function: ${theme.animation.func};
  z-index: ${({ transition }): string =>
    transition === 'entering'
      ? '42'
      : transition === 'entered'
      ? '42'
      : transition === 'exiting'
      ? '-1'
      : transition === 'exited'
      ? '-1'
      : '-1'};
`

interface Props {
  condition: boolean
  children: React.ReactNode
}

const Transition: FC<Props> = ({ condition, children }) => (
  <TransitionUtil
    in={condition}
    timeout={{ enter: 0, exit: BASIC_TRANSITION_TIME_NUMERIC }}
    unmountOnExit
    mountOnEnter
    onEnter={(node: HTMLElement): number => node.offsetHeight}
  >
    {(transition: string): React.ReactNode => (
      <AnimatedBox transition={transition}>{children}</AnimatedBox>
    )}
  </TransitionUtil>
)

export default Transition
