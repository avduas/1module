import { useParams } from 'react-router-dom'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { UserTabs } from '@/widgets/UserTabs'

export const UserTodosPage = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <MainLayout>
      <UserTabs />
      <div style={{ padding: '20px' }}>
        <h1>User {id} Tasks</h1>
        {/* Todos list component will be here */}
      </div>
    </MainLayout>
  )
}
