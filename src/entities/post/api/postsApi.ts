import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
      providesTags: ['Post'],
    }),
    getPostsByUserId: builder.query<Post[], number>({
      query: userId => `/users/${userId}/posts`,
      providesTags: (result, error, userId) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), { type: 'Post', id: userId }]
          : [{ type: 'Post', id: userId }],
    }),
    getPostById: builder.query<Post, number>({
      query: id => `/posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Post', id }],
    }),
  }),
})

export const { useGetPostsQuery, useGetPostsByUserIdQuery, useGetPostByIdQuery } = postsApi
