import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { updateTextField } from 'store/cars/actions'
import { TextFieldData, TextFieldParams } from 'store/cars/types'
import { RootState } from 'store/rootReducer'
import styled from 'styled-components/macro'

import Input from '../ui/Input'

interface ComponentProps {
  params: TextFieldParams
  wide?: boolean
}

type Props = ComponentProps & StoreProps

const InputContainer: FC<Props> = ({ params, wide, data, updateTextField }) => {
  return (
    <Container wide={wide}>
      <Input
        params={params}
        data={data[params.type]}
        updateData={updateTextField}
      />
    </Container>
  )
}

const mapState = (state: RootState): { data: TextFieldData['payload'] } => ({
  data: {
    title: state.cars.form.title,
    year: state.cars.form.year,
    price: state.cars.form.price,
    description: state.cars.form.description,
  },
})

const mapDispatch = { updateTextField }

const connector = connect(mapState, mapDispatch)

type StoreProps = ConnectedProps<typeof connector>

export default connector(InputContainer)

const Container = styled.section<{ wide?: boolean }>`
  margin-right: 20px;
  position: relative;
  width: 100%;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 980px) {
    min-width: 220px;
  }
`
