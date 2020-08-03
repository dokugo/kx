import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { setStatus } from 'store/cars/actions'
import { CarStatus } from 'store/cars/types'
import { RootState } from 'store/rootReducer'
import styled from 'styled-components/macro'

import Select from '../ui/Select'

const SelectContainer: FC<StoreProps> = ({ status, setStatus }) => {
  return (
    <Container>
      <Select data={status} updateData={setStatus} />
    </Container>
  )
}

const mapState = (state: RootState): { status: CarStatus } => ({
  status: state.cars.form.status,
})

const mapDispatch = { setStatus }

const connector = connect(mapState, mapDispatch)

type StoreProps = ConnectedProps<typeof connector>

export default connector(SelectContainer)

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
