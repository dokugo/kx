import { Car } from './types'

export const validate = (state: Car): boolean => {
  if (!state.color.length) return false
  if (!state.description.length) return false
  if (!state.price.length) return false
  if (!state.status.length) return false
  if (!state.title.length) return false
  if (!state.year.length) return false
  return true
}
