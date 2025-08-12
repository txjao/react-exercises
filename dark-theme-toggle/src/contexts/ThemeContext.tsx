import { createContext, useContext } from "react"

export type Theme = 'light' | 'dark'

export interface ThemeContextProps {
  theme: Theme,
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => { }
})

export function useThemeContext() {
  return useContext(ThemeContext)
}
