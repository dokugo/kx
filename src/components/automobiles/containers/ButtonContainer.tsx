import React, { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { submitForm } from 'store/automobile/actions'
import styled from 'styled-components/macro'

import Button from '../ui/Button'

const ButtonContainer: FC<StoreProps> = ({ submitForm }) => {
  return (
    <Container>
      <Button handlerFunction={submitForm} />
    </Container>
  )
}

const mapDispatchToProps = { submitForm }

const connector = connect(null, mapDispatchToProps)

type StoreProps = ConnectedProps<typeof connector>

export default connector(ButtonContainer)

const Container = styled.section``
