import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/shared/lib/theme/ThemeProvider'
import {
  PostsPage,
  UserAlbumsPage,
  AlbumPhotosPage,
  UserTodosPage,
  UserPostsPage,
} from '@/pages'

const router = createBrowserRouter([
  {
    path: '/posts',
    element: <PostsPage />,
  },
  {
    path: '/posts/:id',
    element: <PostsPage />,
  },
  {
    path: '/users/:id/albums',
    element: <UserAlbumsPage />,
  },
  {
    path: '/albums/:id/photos',
    element: <AlbumPhotosPage />,
  },
  {
    path: '/users/:id/todos',
    element: <UserTodosPage />,
  },
  {
    path: '/users/:id/posts',
    element: <UserPostsPage />,
  },
])

export const RouterProvider_ = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
