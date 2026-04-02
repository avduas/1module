import { createEntityAdapter } from '@reduxjs/toolkit'
import type { Todo } from '../api/todosApi'

export const todoAdapter = createEntityAdapter<Todo>({
  selectId: todo => todo.id,
})

export const todoSelectors = todoAdapter.getSelectors(state => state)
