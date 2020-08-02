import { DefaultTheme } from 'styled-components'

export const BASIC_TRANSITION_TIME_NUMERIC = 300

const theme: DefaultTheme = {
  colors: {
    black: 'rgb(70, 70, 70)',
    body: 'rgba(170, 170, 170, 0.033)',
    darkblue: 'rgb(95, 110, 170)',
    grey: 'rgb(170, 170, 170)',
    lightgrey: 'rgb(230, 230, 230)',
    lightyellow: 'rgb(250, 245, 220)',
    orange: 'rgb(250, 160, 55)',
    shadow: 'rgba(0, 0, 0, 0.175)',
    semiwhite: 'rgb(250, 250, 250)',
    white: 'rgb(255, 255, 255)',
  },
  animation: {
    fast: `${BASIC_TRANSITION_TIME_NUMERIC}ms`,
    mild: `500ms`,
    func: 'ease-in-out',
  },
}

export default theme
