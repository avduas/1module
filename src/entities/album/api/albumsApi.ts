import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Album {
  userId: number
  id: number
  title: string
}

export const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Album'],
  endpoints: builder => ({
    getAlbums: builder.query<Album[], void>({
      query: () => '/albums',
      providesTags: ['Album'],
    }),
    getAlbumsByUserId: builder.query<Album[], number>({
      query: userId => `/users/${userId}/albums`,
      providesTags: (result, error, userId) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Album' as const, id })), { type: 'Album', id: userId }]
          : [{ type: 'Album', id: userId }],
    }),
  }),
})

export const { useGetAlbumsQuery, useGetAlbumsByUserIdQuery } = albumsApi
