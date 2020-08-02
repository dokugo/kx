import React, { FC } from 'react'
import { InputParams, InputTypes } from 'store/automobile/types'
import styled from 'styled-components/macro'

import { InputDefault, InputNumber } from './InputComponents'

interface Props {
  params: InputParams
  data: string
  updateData: (type: InputTypes, text: string) => void
}

const InputComponent: FC<Props> = ({ params, data, updateData }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    // if (!event.target.validity.valid) return

    // const stringWithoutSpaces = event.target.value.replace(/\s+/g, '')
    // const payload = Number(stringWithoutSpaces) || ''

    /*     const payload = ''
    if (payload === data) return
 
    updateData(payload) */
    // console.log(event.target.value)

    updateData(params.type, event.target.value)
  }

  const isLabelActive = data.length ? true : false

  const numericInput = params.type === InputTypes.Price

  const Input = params.type === InputTypes.Price ? InputNumber : InputDefault

  return (
    <Container>
      <Label isActive={isLabelActive}>{params.label}</Label>
      <Input
        onChange={handleChange}
        type="text"
        // pattern={numericInput ? '[0-9s]*' : undefined}
        thousandSeparator={numericInput ? ' ' : undefined}
        maxLength={numericInput ? 11 : undefined}
        value={data}
      />
    </Container>
  )
}

export default InputComponent

const Container = styled.section`
  position: relative;
  width: 100%;
`

const Label = styled.label<{ isActive: boolean }>`
  color: #999;
  display: flex;
  font-size: 12px;
  left: 0;
  line-height: 40px;
  padding-left: 10px;
  pointer-events: none;
  position: absolute;
  top: ${(props): string => (props.isActive ? '-35px' : '0')};
  transition: 0.3s ease all;
`
