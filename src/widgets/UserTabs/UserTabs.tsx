import { NavLink, useParams, useLocation } from 'react-router-dom'
import './UserTabs.css'

export const UserTabs = () => {
  const { id } = useParams<{ id?: string }>()
  const { pathname } = useLocation()

  // Show home button only if not on / or /posts
  const showHomeButton = pathname !== '/' && pathname !== '/posts'

  if (!id) {
    return (
      <nav className="user-tabs">
        {showHomeButton && (
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
            title="На главную"
          >
            ← На главную
          </NavLink>
        )}
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
        >
          Все посты
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
        >
          Пользователи
        </NavLink>
        <NavLink
          to="/albums"
          className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
        >
          Альбомы
        </NavLink>
      </nav>
    )
  }

  return (
    <nav className="user-tabs">
      {showHomeButton && (
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
          title="На главную"
        >
          ← На главную
        </NavLink>
      )}
      <NavLink
        to={`/users/${id}/posts`}
        className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
      >
        Посты
      </NavLink>
      <NavLink
        to={`/users/${id}/albums`}
        className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
      >
        Альбомы
      </NavLink>
      <NavLink
        to={`/users/${id}/todos`}
        className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
      >
        Задачи
      </NavLink>
    </nav>
  )
}
