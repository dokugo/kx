import React, { FC } from 'react'
import TransitionBox from 'react-transition-group/Transition'
import styled from 'styled-components/macro'
import theme, { BASIC_TRANSITION_TIME_NUMERIC } from 'theme'

const AnimatedBox = styled.section<{ transition: string; wide?: boolean }>`
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
  position: absolute;
  transition-duration: ${theme.animation.fast};
  transition-timing-function: ${theme.animation.func};
  width: ${({ wide }): string => (wide ? '100%' : 'unset')};
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
  wide?: boolean
}

const Transition: FC<Props> = ({ condition, children, wide }) => (
  <TransitionBox
    in={condition}
    timeout={{ enter: 0, exit: BASIC_TRANSITION_TIME_NUMERIC }}
    unmountOnExit
    mountOnEnter
    onEnter={(node: HTMLElement): number => node.offsetHeight}
  >
    {(transition: string): React.ReactNode => (
      <AnimatedBox transition={transition} wide={wide}>
        {children}
      </AnimatedBox>
    )}
  </TransitionBox>
)

export default Transition
