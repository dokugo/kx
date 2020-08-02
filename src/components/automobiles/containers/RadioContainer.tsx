import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { setColor } from 'store/automobile/actions'
import { CarColor } from 'store/automobile/types'
import { RootState } from 'store/rootReducer'
import styled from 'styled-components/macro'

import { radioData } from '../constants'
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

const mapStateToProps = (state: RootState): { color: CarColor } => ({
  color: state.automobile.color,
})

const mapDispatchToProps = { setColor }

const connector = connect(mapStateToProps, mapDispatchToProps)

type StoreProps = ConnectedProps<typeof connector>

export default connector(RadioContainer)

const Container = styled.section`
  position: relative;
  width: 306px;
`

const RadioGroup = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
`

const Label = styled.label`
  color: #999;
  display: flex;
  font-size: 12px;
  position: absolute;
  top: -15px;
`
