import React, { FC, useEffect, useRef, useState } from 'react'
import { CarStatus } from 'store/cars/types'
import styled from 'styled-components/macro'
import Transition from 'utils/transition'

import { selectData } from '../../constants'

interface Props {
  data: CarStatus
  updateData: (input: CarStatus) => void
}

const SelectComponent: FC<Props> = ({ data, updateData }) => {
  const [isOpen, setIsOpen] = useState(false)

  const select = useRef<HTMLDivElement>(null)

  const handleInsideClick = (): void => setIsOpen((isOpen) => !isOpen)

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
      event.preventDefault()

      setIsOpen(true)

      const target = event.target as HTMLElement
      const nextSibling = target?.nextElementSibling as HTMLElement
      const nextSiblingChild = nextSibling?.firstElementChild as HTMLElement
      if (!nextSiblingChild) return
      nextSiblingChild.focus()
    }
  }

  const handleOutsideKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      setIsOpen(false)
      select.current?.focus()
    }
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
    const target = event.target as HTMLElement

    switch (event.key) {
      case 'Enter': {
        updateData(target.dataset.value as CarStatus)
        setIsOpen(false)
        select.current?.focus()
        break
      }

      case 'ArrowDown': {
        event.preventDefault()

        const nextTarget = target?.nextElementSibling as HTMLElement
        if (!nextTarget) return
        nextTarget.focus()
        break
      }

      case 'ArrowUp': {
        event.preventDefault()

        const previousTarget = target?.previousElementSibling as HTMLElement
        if (!previousTarget) return
        previousTarget.focus()
        break
      }

      case 'Tab': {
        if (!target?.nextElementSibling) setIsOpen(false)
        break
      }

      default:
        return
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
    <>
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
      <Transition condition={isOpen} wide>
        {options}
      </Transition>
    </>
  )
}

export default SelectComponent

const SelectElement = styled.div<{ isOpen: boolean; isDefault: boolean }>`
  align-items: center;
  background: ${({ theme }): string => theme.color.white};
  border: ${({ theme }): string => theme.color.grey};
  border-bottom: ${({ isOpen, theme }): string =>
    isOpen ? theme.color.black : theme.color.grey};
  border-style: solid;
  border-width: 1px 1px 2px 1px;
  box-sizing: border-box;
  color: ${({ isDefault, theme }): string =>
    isDefault ? theme.color.darkgrey : theme.color.black};
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  height: 40px;
  line-height: 1;
  outline: 0;
  padding: 0 8px;
  transition-duration: ${({ theme }): string => theme.animation.fast};
  transition-timing-function: ${({ theme }): string => theme.animation.func};
  user-select: none;
  width: 100%;

  &::after {
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    transform: ${({ isOpen }): string => (isOpen ? 'rotate(180deg)' : '')};
    border-top: 6px solid
      ${({ isOpen, theme }): string =>
        isOpen ? theme.color.black : theme.color.darkgrey};
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

  &:focus {
    border-bottom-color: ${({ theme }): string => theme.color.black};
  }

  &:hover {
    border-bottom-color: ${({ isOpen, theme }): string =>
      isOpen ? theme.color.black : theme.color.red};

    &::after {
      border-top-color: ${({ isOpen, theme }): string =>
        isOpen ? theme.color.black : theme.color.red};
    }
  }
`

const DropdownElement = styled.div<{ isOpen: boolean }>`
  align-items: center;
  background: ${({ theme }): string => theme.color.white};
  border: none;
  border-color: ${({ theme }): string => theme.color.grey};
  border-style: solid;
  border-width: 0 1px;
  box-sizing: border-box;
  color: ${({ theme }): string => theme.color.darkgrey};
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  height: 40px;
  line-height: 1;
  outline: 0;
  padding: 0 8px;
  user-select: none;
  width: 100%;

  &:hover {
    color: ${({ theme }): string => theme.color.black};
  }

  &:focus {
    color: ${({ theme }): string => theme.color.black};
  }

  &:last-of-type {
    border-bottom-width: 1px;
  }

  @media (max-width: 980px) {
    height: 30px;
  }
`
