import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { removeCar } from 'store/cars/actions'
import { Car } from 'store/cars/types'
import { RootState } from 'store/rootReducer'
import styled from 'styled-components/macro'

import LoadingState from './LoadingState'
import Row from './Row'

const TableBody: FC<StoreProps> = ({ table, removeCar }) => {
  const loadingState = !table.length ? <LoadingState /> : null

  const renderRows = table.map((item) => {
    return <Row key={item.id} data={item} removeCar={removeCar} />
  })

  return <Body>{loadingState || renderRows}</Body>
}

const mapState = (state: RootState): { table: Car[] } => ({
  table: state.cars.table,
})

const mapDispatch = { removeCar }

const connector = connect(mapState, mapDispatch)

type StoreProps = ConnectedProps<typeof connector>

export default connector(TableBody)

const Body = styled.tbody``
