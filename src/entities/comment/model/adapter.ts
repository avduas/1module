import { createEntityAdapter } from '@reduxjs/toolkit'
import type { Comment } from './types'

export const commentAdapter = createEntityAdapter<Comment>({
  selectId: comment => comment.id,
})

export const commentSelectors = commentAdapter.getSelectors(state => state)
