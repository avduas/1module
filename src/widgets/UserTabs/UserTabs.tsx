import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './UserTabs.css'

export const UserTabs = () => {
  const { id } = useParams<{ id?: string }>()

  if (!id) {
    return (
      <nav className="user-tabs">
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
        >
          All Posts
        </NavLink>
      </nav>
    )
  }

  return (
    <nav className="user-tabs">
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
