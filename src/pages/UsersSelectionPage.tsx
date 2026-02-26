import { NavLink } from 'react-router-dom'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { UserTabs } from '@/widgets/UserTabs'
import { useGetUsersQuery } from '@/entities/user/api/usersApi'
import './SelectionPage.css'

export const UsersSelectionPage = () => {
  const { data: users = [], isLoading: loading, error } = useGetUsersQuery()

  if (loading) return <MainLayout><div className="loading">Загрузка...</div></MainLayout>
  if (error) return <MainLayout><div className="error">Ошибка: Failed to fetch users</div></MainLayout>

  return (
    <MainLayout>
      <UserTabs />
      <div className="selection-page">
        <h1>Выберите пользователя</h1>
        <div className="selection-grid">
          {users.map(user => (
            <NavLink
              key={user.id}
              to={`/users/${user.id}/posts`}
              className="selection-card"
            >
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

