import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { addCar } from 'store/cars/actions'
import { RootState } from 'store/rootReducer'
import styled from 'styled-components/macro'

import Button from '../ui/Button'

const ButtonContainer: FC<StoreProps> = ({ isInvalidFormData, addCar }) => {
  return (
    <Container>
      <Button isInvalidFormData={isInvalidFormData} handlerFunction={addCar} />
    </Container>
  )
}

const mapState = (state: RootState): { isInvalidFormData: boolean } => ({
  isInvalidFormData: state.cars.isInvalidFormData,
})

const mapDispatch = { addCar }

const connector = connect(mapState, mapDispatch)

type StoreProps = ConnectedProps<typeof connector>

export default connector(ButtonContainer)

const Container = styled.section`
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
