import { NavLink, useLocation, useParams } from 'react-router-dom'
import './Breadcrumbs.css'

interface BreadcrumbItem {
  label: string
  path: string
}

export const Breadcrumbs = () => {
  const location = useLocation()
  const { id } = useParams<{ id?: string }>()

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const pathname = location.pathname
    const crumbs: BreadcrumbItem[] = [
      { label: 'Посты', path: '/posts' },
    ]

    if (pathname.includes('/users') && !pathname.includes('/posts')) {
      if (id) {
        crumbs.push({ label: `Пользователь ${id}`, path: `/users/${id}/posts` })
      } else {
        crumbs.push({ label: 'Выбрать пользователя', path: '/users' })
      }
    }

    if (pathname.includes('/albums')) {
      if (pathname.includes('/photos')) {
        crumbs.push({ label: 'Альбомы', path: '/albums' })
        if (id) {
          crumbs.push({ label: `Альбом ${id}`, path: `/albums/${id}/photos` })
        }
      } else {
        crumbs.push({ label: 'Выбрать альбом', path: '/albums' })
      }
    }

    return crumbs
  }

  const breadcrumbs = getBreadcrumbs()

  if (breadcrumbs.length <= 1) {
    return null
  }

  return (
    <nav className="breadcrumbs">
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.path} className="breadcrumb-item">
          {index > 0 && <span className="breadcrumb-separator">/</span>}
          <NavLink
            to={crumb.path}
            className={({ isActive }) =>
              `breadcrumb-link ${isActive ? 'active' : ''}`
            }
          >
            {crumb.label}
          </NavLink>
        </div>
      ))}
    </nav>
  )
}
