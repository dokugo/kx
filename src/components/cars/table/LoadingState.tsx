import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'store/rootReducer'

import LoadingAnimation from './LoadingAnimation'
import { ItemSingle as Item, RowElement as Row } from './Row'

const LoadingState: FC<StoreProps> = ({ isLoading, isLoadingError }) => {
  const content = isLoading ? (
    <LoadingAnimation />
  ) : isLoadingError ? (
    'Ошибка загрузки данных'
  ) : (
    'Сейчас нет автомобилей в наличии'
  )

  return (
    <Row>
      <Item colSpan={6}>{content}</Item>
    </Row>
  )
}

const mapState = (
  state: RootState
): {
  isLoading: boolean
  isLoadingError: boolean
} => ({
  isLoading: state.cars.isLoading,
  isLoadingError: state.cars.isLoadingError,
})

const connector = connect(mapState)

type StoreProps = ConnectedProps<typeof connector>

export default connector(LoadingState)
