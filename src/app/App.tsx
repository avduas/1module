import { MainLayout } from '../shared/layouts/MainLayout'
import { PostList } from '../widgets/PostList'

export type Post = {
  id: number
  title: string
  body: string
}

const posts: Post[] = [
  {
    id: 1,
    title: 'Первый пост',
    body: 'Это текст первого поста',
  },
  {
    id: 2,
    title: 'Второй пост',
    body: 'Это текст второго поста',
  },
]

export default function App() {
  return (
    <MainLayout>
      <PostList posts={posts} />
    </MainLayout>
  )
}
