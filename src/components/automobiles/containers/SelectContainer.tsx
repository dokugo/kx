import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { setStatus } from 'store/automobile/actions'
import { CarStatus } from 'store/automobile/types'
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

const mapStateToProps = (
  state: RootState
): {
  status: CarStatus
} => ({
  status: state.automobile.status,
})

const mapDispatchToProps = { setStatus }

const connector = connect(mapStateToProps, mapDispatchToProps)

type StoreProps = ConnectedProps<typeof connector>

export default connector(SelectContainer)

const Container = styled.section``
