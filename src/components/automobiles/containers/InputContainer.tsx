import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { updateTextField } from 'store/automobile/actions'
import { InputData, InputParams } from 'store/automobile/types'
import { RootState } from 'store/rootReducer'
import styled from 'styled-components/macro'

import Input from '../ui/Input'

interface ComponentProps {
  params: InputParams
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

const mapStateToProps = (
  state: RootState
): {
  data: InputData['payload']
} => ({
  data: {
    title: state.automobile.title,
    year: state.automobile.year,
    price: state.automobile.price,
    description: state.automobile.description,
  },
})

const mapDispatchToProps = { updateTextField }

const connector = connect(mapStateToProps, mapDispatchToProps)

type StoreProps = ConnectedProps<typeof connector>

export default connector(InputContainer)

const Container = styled.section<{ wide?: boolean }>`
  position: relative;
  width: ${(props): string => (props.wide ? '100%' : 'unset')};
`
