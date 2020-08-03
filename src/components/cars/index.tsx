import React, { FC } from 'react'
import styled from 'styled-components/macro'

import Form from './form'
import Table from './table'

const Cars: FC = () => {
  return (
    <>
      <TitleBox>
        <Title>¡Ay caramba!</Title>
      </TitleBox>
      <FormBox>
        <Form />
      </FormBox>
      <TableBox>
        <Table />
      </TableBox>
    </>
  )
}

export default Cars

const TitleBox = styled.div`
  margin-top: 70px;
`

const Title = styled.h2`
  color: ${({ theme }): string => theme.color.lightblack};
  font-size: 42px;
  line-height: 42px;
  margin: 0;
`

const FormBox = styled.div`
  margin-top: 60px;
  width: 100%;
`

const TableBox = styled.div`
  margin-bottom: 330px;
  margin-top: 155px;

  @media (max-width: 980px) {
    margin-top: 35px;
    margin-bottom: 425px;
  }
`
