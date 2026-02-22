import { useParams } from 'react-router-dom'
import { PostList } from '@/widgets/PostList/PostList'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { UserTabs } from '@/widgets/UserTabs'

export const PostsPage = () => {
  const { id } = useParams<{ id?: string }>()

  return (
    <MainLayout>
      <UserTabs />
      <div style={{ padding: '20px' }}>
        {id ? (
          <div>
            <h1>Post Detail ID: {id}</h1>
            {/* Post detail component will be here */}
          </div>
        ) : (
          <div>
            <h1>All Posts</h1>
            <PostList />
          </div>
        )}
      </div>
    </MainLayout>
  )
}
