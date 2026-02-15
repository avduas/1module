import { ThemeProvider } from '../shared/lib/theme/ThemeProvider'
import { MainLayout } from '../shared/layouts/MainLayout'
import { PostList } from '../widgets/PostList/PostList'

export default function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <PostList />
      </MainLayout>
    </ThemeProvider>
  )
}
