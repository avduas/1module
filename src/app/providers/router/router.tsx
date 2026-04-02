import { createBrowserRouter } from 'react-router-dom'
import {
  PostsPage,
  UserAlbumsPage,
  AlbumPhotosPage,
  UserTodosPage,
  UserPostsPage,
  UsersSelectionPage,
  AlbumsSelectionPage,
} from '@/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PostsPage />,
  },
  {
    path: '/posts',
    element: <PostsPage />,
  },
  {
    path: '/posts/:id',
    element: <PostsPage />,
  },
  {
    path: '/users',
    element: <UsersSelectionPage />,
  },
  {
    path: '/users/:id/posts',
    element: <UserPostsPage />,
  },
  {
    path: '/users/:id/albums',
    element: <UserAlbumsPage />,
  },
  {
    path: '/users/:id/todos',
    element: <UserTodosPage />,
  },
  {
    path: '/albums',
    element: <AlbumsSelectionPage />,
  },
  {
    path: '/albums/:id/photos',
    element: <AlbumPhotosPage />,
  },
])

