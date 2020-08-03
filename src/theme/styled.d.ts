import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      green: string
      grey: string
      lightgrey: string
      darkgrey: string
      lightblack: string
      black: string
      lightred: string
      red: string
      darkred: string
      maroon: string
      white: string
      semiwhite: string
      darkwhite: string
    }
    animation: {
      fast: string
      mild: string
      func: string
    }
  }
}
