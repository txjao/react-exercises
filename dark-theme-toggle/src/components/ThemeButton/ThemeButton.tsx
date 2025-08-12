
import { useThemeContext } from "../../contexts/ThemeContext";


export function ThemeButton() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <button onClick={toggleTheme}>
      {theme}
    </button>
  )
}
