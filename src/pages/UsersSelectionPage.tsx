import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MainLayout } from '@/shared/layouts/MainLayout'
import './SelectionPage.css'

interface User {
  id: number
  name: string
  email: string
}

export const UsersSelectionPage = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) throw new Error('Failed to fetch users')
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  if (loading) return <MainLayout><div className="loading">Загрузка...</div></MainLayout>
  if (error) return <MainLayout><div className="error">Ошибка: {error}</div></MainLayout>

  return (
    <MainLayout>
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
