import { createEntityAdapter } from '@reduxjs/toolkit'
import type { Album } from '../api/albumsApi'

export const albumAdapter = createEntityAdapter<Album>({
  selectId: album => album.id,
})

export const albumSelectors = albumAdapter.getSelectors(state => state)
