import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {
  postsApi,
  commentsApi,
  albumsApi,
  todosApi,
  usersApi,
  albumAdapter,
  todoAdapter,
} from '../../../entities'


export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      commentsApi.middleware,
      albumsApi.middleware,
      todosApi.middleware,
      usersApi.middleware,
    ),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
