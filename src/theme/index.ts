import { DefaultTheme } from 'styled-components'

export const BASIC_TRANSITION_TIME_NUMERIC = 300

const theme: DefaultTheme = {
  color: {
    green: 'rgb(136, 197, 4)',
    lightgrey: 'rgb(180, 180, 180)',
    grey: 'rgb(220, 220, 220)',
    darkgrey: 'rgb(150, 150, 150)',
    lightblack: 'rgb(40, 45, 48)',
    black: 'rgb(17, 17, 17)',
    lightred: 'rgb(215, 67, 69)',
    red: 'rgb(196, 9, 47)',
    darkred: 'rgb(180, 30, 30)',
    maroon: 'rgb(160, 40, 40)',
    white: 'rgb(255, 255, 255)',
    semiwhite: 'rgb(245, 245, 245)',
    darkwhite: 'rgb(230, 233, 234)',
  },
  animation: {
    fast: `${BASIC_TRANSITION_TIME_NUMERIC}ms`,
    mild: `500ms`,
    func: 'ease-in-out',
  },
}

export default theme
