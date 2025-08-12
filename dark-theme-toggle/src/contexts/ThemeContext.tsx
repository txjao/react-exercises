import { createContext, useContext } from "react"

export type Theme = 'light' | 'dark'

export interface IThemeContext {
  theme: Theme,
  toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  toggleTheme: () => { }
})

export function useThemeContext() {
  return useContext(ThemeContext)
}
