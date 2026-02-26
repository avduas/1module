import { createEntityAdapter } from '@reduxjs/toolkit'
import type { Post } from './types'

export const postAdapter = createEntityAdapter<Post>({
  sortComparer: (a, b) => b.id - a.id, // Sort in descending order
})

export const postSelectors = postAdapter.getSelectors((state: { posts: ReturnType<typeof postAdapter.getInitialState> }) => state.posts)
