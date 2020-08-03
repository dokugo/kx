import React, { FC } from 'react'
import styled from 'styled-components/macro'

import { inputData } from '../constants'
import ButtonContainer from './containers/ButtonContainer'
import InputContainer from './containers/InputContainer'
import RadioContainer from './containers/RadioContainer'
import SelectContainer from './containers/SelectContainer'

const FormComponent: FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <InputContainer params={inputData.title} />
        <InputContainer params={inputData.year} />
        <InputContainer params={inputData.price} />
      </Row>
      <Row>
        <InputContainer params={inputData.description} wide />
      </Row>
      <Row>
        <RadioContainer />
        <SelectContainer />
        <ButtonContainer />
      </Row>
    </Form>
  )
}

export default FormComponent

const Form = styled.form``

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  &:last-of-type {
    margin-bottom: 0;
  }
`
