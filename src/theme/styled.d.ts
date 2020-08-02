import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string
      body: string
      darkblue: string
      grey: string
      lightgrey: string
      lightyellow: string
      orange: string
      shadow: string
      semiwhite: string
      white: string
    }
    animation: {
      fast: string
      mild: string
      func: string
    }
  }
}
