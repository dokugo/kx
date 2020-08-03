import NumberFormat from 'react-number-format'
import styled, { css } from 'styled-components/macro'

const InputStyleCommon = css`
  align-items: center;
  background: ${({ theme }): string => theme.color.white};
  border: none;
  border-color: ${({ theme }): string => theme.color.grey};
  border-style: solid;
  border-width: 1px 1px 2px 1px;
  box-sizing: border-box;
  color: ${({ theme }): string => theme.color.black};
  display: flex;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 12px;
  font-weight: 500;
  height: 40px;
  line-height: 1;
  min-width: 306px;
  outline: 0;
  padding: 0 8px;
  transition-duration: ${({ theme }): string => theme.animation.fast};
  transition-timing-function: ${({ theme }): string => theme.animation.func};
  width: 100%;

  &:hover {
    border-bottom-color: ${({ theme }): string => theme.color.red};
  }

  &:focus {
    border-bottom-color: ${({ theme }): string => theme.color.black};
  }

  @media (max-width: 980px) {
    min-width: unset;
  }
`

export const InputNumber = styled(NumberFormat)`
  ${InputStyleCommon}
`

type Separator = string | undefined

export const InputDefault = styled.input<{ thousandSeparator: Separator }>`
  ${InputStyleCommon}
`
