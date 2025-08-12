import { useThemeContext } from "../../contexts/ThemeContext"
import "./ThemeBanner.scss"


export function ThemeBanner() {
  const { theme } = useThemeContext()

  return (
    <div className={theme}>
      {theme}
    </div>
  )
}
