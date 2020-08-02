import React, { FC } from 'react'
import styled from 'styled-components/macro'

import { inputData } from './constants'
import ButtonContainer from './containers/ButtonContainer'
import InputContainer from './containers/InputContainer'
import RadioContainer from './containers/RadioContainer'
import SelectContainer from './containers/SelectContainer'
import Table from './table/index'

const Automobiles: FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  return (
    <>
      <TitleBox>
        <Title>¡Ay caramba!</Title>
      </TitleBox>
      <FormBox>
        <Form onSubmit={handleSubmit}>
          <Row>
            <InputContainer params={inputData.model} />
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
      </FormBox>
      <TableBox>
        <Table />
      </TableBox>
    </>
  )
}

export default Automobiles

const TitleBox = styled.div`
  margin-top: 70px;
`

const Title = styled.h2`
  color: #282d30;
  font-size: 42px;
  line-height: 42px;
  margin: 0;
`

const FormBox = styled.div`
  margin-top: 60px;
  width: 100%;
`

const Form = styled.form``

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const TableBox = styled.div`
  margin-bottom: 330px;
  margin-top: 155px;
`
