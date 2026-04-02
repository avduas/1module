import { useParams } from 'react-router-dom'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { PostList } from '@/widgets/PostList/PostList'
import { UserTabs } from '@/widgets/UserTabs'

export const UserPostsPage = () => {
  const { id } = useParams<{ id: string }>()
  const userId = id ? parseInt(id) : undefined

  return (
    <MainLayout>
      <UserTabs />
      <div style={{ padding: '20px' }}>
        <h1>User {id} Posts</h1>
        <PostList userId={userId} />
      </div>
    </MainLayout>
  )
}
