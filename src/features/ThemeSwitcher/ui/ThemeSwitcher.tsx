import { useTheme } from '../../../shared/lib/theme'
import './ThemeSwitcher.css'

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="theme-switcher"
      onClick={e => { e.preventDefault(); toggleTheme() }}
      aria-label={`Переключить на ${theme === 'light' ? 'тёмную' : 'светлую'} тему`}
      title={theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
