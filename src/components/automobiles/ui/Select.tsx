import React, { FC, useEffect, useRef, useState } from 'react'
import { CarStatus } from 'store/automobile/types'
import styled from 'styled-components/macro'
import Transition from 'utils/transition'

import { selectData } from '../constants'

interface Props {
  data: CarStatus
  updateData: (input: CarStatus) => void
}

const SelectComponent: FC<Props> = ({ data, updateData }) => {
  const [isOpen, setIsOpen] = useState(false)

  const select = useRef<HTMLDivElement>(null)

  const handleInsideClick = (): void => {
    select.current?.blur()
    setIsOpen((isOpen) => !isOpen)
  }

  const handleOutsideClick = (event: MouseEvent): void => {
    if (select.current?.contains(event.target as Node)) return

    const { classList } = event.target as HTMLElement
    if (classList.contains('Dropdown')) return
    if (classList.contains('Select')) return

    setIsOpen(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      setIsOpen((isOpen) => !isOpen)
      select.current?.focus()
    }

    if (event.key === 'ArrowDown') {
      setIsOpen(true)

      const target = event.target as HTMLElement
      const nextSibling = target?.nextElementSibling as HTMLElement
      const nextSiblingChild = nextSibling?.firstElementChild as HTMLElement

      if (!nextSiblingChild) return

      nextSiblingChild.focus()
    }
  }

  const handleOutsideKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
      document.addEventListener('keydown', handleOutsideKey)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleOutsideKey)
    }

    return (): void => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleOutsideKey)
    }
  }, [isOpen])

  const handleDropdownClick = (event: React.MouseEvent<HTMLElement>): void => {
    const target = event.target as HTMLElement
    updateData(target.dataset.value as CarStatus)
    setIsOpen(false)
  }

  const handleDropdownKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      const target = event.target as HTMLElement
      updateData(target.dataset.value as CarStatus)
      setIsOpen(false)
      select.current?.focus()
    }

    if (event.key === 'ArrowDown') {
      const target = event.target as HTMLElement
      const nextTarget = target?.nextElementSibling as HTMLElement

      if (!nextTarget) return

      nextTarget.focus()
    }

    if (event.key === 'ArrowUp') {
      const target = event.target as HTMLElement
      const previousTarget = target?.previousElementSibling as HTMLElement

      if (!previousTarget) return

      previousTarget.focus()
    }
  }

  const options = Object.entries(selectData.types).map((item) => {
    return (
      <DropdownElement
        tabIndex={0}
        onClick={handleDropdownClick}
        onKeyDown={handleDropdownKeyDown}
        isOpen={isOpen}
        key={item[1].id}
        data-value={item[0]}
        className="Dropdown"
      >
        {item[1].text}
      </DropdownElement>
    )
  })

  const isDefault = data === CarStatus.Unset ? true : false

  return (
    <Container>
      <SelectElement
        tabIndex={0}
        className="Select"
        isOpen={isOpen}
        isDefault={isDefault}
        onClick={handleInsideClick}
        onKeyDown={handleKeyDown}
        ref={select}
      >
        {selectData.types[data]?.text || selectData.unset}
      </SelectElement>
      <Transition condition={isOpen}>{options}</Transition>
    </Container>
  )
}

export default SelectComponent

const Container = styled.section`
  position: relative;
  width: 100%;
`

const SelectElement = styled.div<{ isOpen: boolean; isDefault: boolean }>`
  align-items: center;
  background: ${({ theme }): string => theme.colors.white};
  border: #dcdcdc;
  border-bottom: ${(props): string => (props.isOpen ? '#111' : '#dcdcdc')};
  border-style: solid;
  border-width: 1px 1px 2px 1px;
  box-sizing: border-box;
  color: ${(props): string => (props.isDefault ? '#999' : ' #111;')};
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  height: 40px;
  line-height: 1;
  min-width: 306px;
  outline: 0;
  padding: 0 8px;
  transition-duration: ${({ theme }): string => theme.animation.fast};
  transition-timing-function: ${({ theme }): string => theme.animation.func};
  user-select: none;
  width: 100%;

  &::after {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${(props): string => (props.isOpen ? '#111' : '#999')};
    content: '';
    display: block;
    height: 0;
    position: absolute;
    right: 18px;
    top: 18px;
    transition-duration: ${({ theme }): string => theme.animation.fast};
    transition-timing-function: ${({ theme }): string => theme.animation.func};
    width: 0;
  }

  &:hover {
    border-bottom-color: ${(props): string =>
      props.isOpen ? '#111' : '#c4092f'};

    &::after {
      border-top-color: ${(props): string =>
        props.isOpen ? '#111' : '#c4092f'};
    }
  }

  &:focus {
    border-bottom-color: #111;
  }
`

const DropdownElement = styled.div<{ isOpen: boolean }>`
  align-items: center;
  background: ${({ theme }): string => theme.colors.white};
  border: none;
  border-color: #dcdcdc;
  border-style: solid;
  border-width: 0 1px;
  box-sizing: border-box;
  color: #999;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  height: 40px;
  line-height: 1;
  min-width: 306px;
  outline: 0;
  padding: 0 8px;
  transition-duration: ${({ theme }): string => theme.animation.fast};
  transition-timing-function: ${({ theme }): string => theme.animation.func};
  user-select: none;
  width: 100%;

  &:hover {
    color: #111;
  }

  &:focus {
    color: #111;
  }

  &:last-of-type {
    border-bottom-width: 1px;
  }
`
