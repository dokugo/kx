import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { setColor } from 'store/cars/actions'
import { CarColor } from 'store/cars/types'
import { RootState } from 'store/rootReducer'
import styled from 'styled-components/macro'

import { radioData } from '../../constants'
import Radio from '../ui/Radio'

const RadioContainer: FC<StoreProps> = ({ color, setColor }) => {
  const radios = radioData.types.map((item) => {
    return (
      <Radio
        key={item.id}
        color={item.color}
        value={item.value}
        activeValue={color}
        updateActiveValue={setColor}
      />
    )
  })

  return (
    <Container>
      <Label>Цвет</Label>
      <RadioGroup>{radios}</RadioGroup>
    </Container>
  )
}

const mapState = (state: RootState): { color: CarColor } => ({
  color: state.cars.form.color,
})

const mapDispatch = { setColor }

const connector = connect(mapState, mapDispatch)

type StoreProps = ConnectedProps<typeof connector>

export default connector(RadioContainer)

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

const RadioGroup = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
`

const Label = styled.label`
  color: ${({ theme }): string => theme.color.darkgrey};
  display: flex;
  font-size: 12px;
  position: absolute;
  top: -15px;
`
