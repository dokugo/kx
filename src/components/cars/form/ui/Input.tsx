import React, { FC, memo } from 'react'
import { TextField, TextFieldParams } from 'store/cars/types'
import styled from 'styled-components/macro'

import { InputDefault, InputNumber } from './InputComponents'

interface Props {
  params: TextFieldParams
  data: string
  updateData: (type: TextField, text: string) => void
}

const InputComponent: FC<Props> = memo(({ params, data, updateData }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const target = event.target

    if (params.type === TextField.Year || params.type === TextField.Price) {
      if (!target.validity.valid) return
      if (target.value === data) return
    }

    updateData(params.type, target.value)
  }

  const isLabelActive = data.length ? true : false

  const Input = params.type === TextField.Price ? InputNumber : InputDefault

  const thousandSeparator = params.type === TextField.Price ? ' ' : undefined

  const getMaxLength = (inputType: string): number | undefined => {
    if (inputType === TextField.Year) return 4
    if (inputType === TextField.Price) return 11
    return undefined
  }

  const getPattern = (inputType: string): string | undefined => {
    if (inputType === TextField.Year) return '[0-9]*'
    if (inputType === TextField.Price) return '[0-9 ]*'
    return undefined
  }

  return (
    <>
      <Label isActive={isLabelActive}>{params.label}</Label>
      <Input
        onChange={handleChange}
        type="text"
        pattern={getPattern(params.type)}
        thousandSeparator={thousandSeparator}
        maxLength={getMaxLength(params.type)}
        value={data}
      />
    </>
  )
})

InputComponent.displayName = 'InputComponent'

export default InputComponent

/* const Container = styled.section`
  position: relative;
  width: 100%;
` */

const Label = styled.label<{ isActive: boolean }>`
  color: ${({ theme }): string => theme.color.darkgrey};
  display: flex;
  font-size: 12px;
  font-weight: 500;
  left: 0;
  line-height: 40px;
  padding-left: 10px;
  pointer-events: none;
  position: absolute;
  top: ${({ isActive }): string => (isActive ? '-35px' : '0')};
  transition: 0.3s ease all;
`
