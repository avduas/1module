import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    getTodos: builder.query<Todo[], void>({
      query: () => '/todos',
      providesTags: ['Todo'],
    }),
    getTodosByUserId: builder.query<Todo[], number>({
      query: userId => `/users/${userId}/todos`,
      providesTags: (result, error, userId) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Todo' as const, id })), { type: 'Todo', id: userId }]
          : [{ type: 'Todo', id: userId }],
    }),
  }),
})

export const { useGetTodosQuery, useGetTodosByUserIdQuery } = todosApi
