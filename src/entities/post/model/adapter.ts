import { createEntityAdapter } from '@reduxjs/toolkit'
import type { Post } from '../api/postsApi'

export const postAdapter = createEntityAdapter<Post>({
  selectId: post => post.id,
  sortComparer: (a, b) => b.id - a.id, // Sort in descending order
})

export const postSelectors = postAdapter.getSelectors(state => state)
