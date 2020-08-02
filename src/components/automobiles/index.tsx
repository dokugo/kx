import React, { FC } from 'react'
import styled from 'styled-components/macro'

import { inputData } from './constants'
import ButtonContainer from './containers/ButtonContainer'
import InputContainer from './containers/InputContainer'
import RadioContainer from './containers/RadioContainer'
import SelectContainer from './containers/SelectContainer'

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
        <Table></Table>
      </TableBox>
    </>
  )
}

export default Automobiles

const TitleBox = styled.section`
  margin-top: 70px;
`

const Title = styled.h2`
  color: #282d30;
  font-size: 42px;
  line-height: 42px;
  margin: 0;
`

const FormBox = styled.section`
  margin-top: 60px;
  width: 100%;
`

const Form = styled.form``

const TableBox = styled.section`
  margin-top: 40px;
`

const Table = styled.section``

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`
