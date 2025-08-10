import { createContext, useContext } from "react"

export interface ThemeContextProps {
  theme: 'light' | 'dark'
  toogleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toogleTheme: () => { }
})

export function useTheme() {
  return useContext(ThemeContext)
}

