import { NavLink } from 'react-router-dom'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { UserTabs } from '@/widgets/UserTabs'
import { useGetUsersQuery, type User } from '@/entities/user'
import './SelectionPage.css'
import { ItemList } from '@/shared/ui/ItemList'

export const UsersSelectionPage = () => {
  const { data: users = [], isLoading: loading, error } = useGetUsersQuery()
  // `User` type available for annotations if necessary

  if (loading) return <MainLayout><div className="loading">Загрузка...</div></MainLayout>
  if (error) return <MainLayout><div className="error">Ошибка: Failed to fetch users</div></MainLayout>

  return (
    <MainLayout>
      <UserTabs />
      <div className="selection-page">
        <h1>Выберите пользователя</h1>
        <div className="selection-grid">
          <ItemList
            items={users}
            renderItem={user => (
              <NavLink
                key={user.id}
                to={`/users/${user.id}/posts`}
                className="selection-card"
              >
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </NavLink>
            )}
          />
        </div>
      </div>
    </MainLayout>
  )
}

