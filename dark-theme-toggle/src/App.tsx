import { useState } from "react"
import { ThemeButton } from "./components/ThemeButton/ThemeButton"
import { ThemeContext, type Theme, type ThemeContextProps } from "./contexts/ThemeContext"
import { ThemeBanner } from "./components/ThemeBanner/ThemeBanner"



function App() {
  const [theme, setTheme] = useState<Theme>('light')

  function toggleTheme() {
    setTheme(prevState => prevState === 'light' ? 'dark' : 'light')
  }

  const themeContextValue: ThemeContextProps = {
    theme: theme,
    toggleTheme: toggleTheme
  }

  return (
    <>
      <ThemeContext.Provider value={themeContextValue}>
        <ThemeButton />
        <ThemeBanner />
      </ThemeContext.Provider>

    </>
  )
}

export default App
