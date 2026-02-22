import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MainLayout } from '@/shared/layouts/MainLayout'
import './SelectionPage.css'

interface Album {
  id: number
  title: string
  userId: number
}

export const AlbumsSelectionPage = () => {
  const [albums, setAlbums] = useState<Album[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/albums')
        if (!response.ok) throw new Error('Failed to fetch albums')
        const data = await response.json()
        setAlbums(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }
    fetchAlbums()
  }, [])

  if (loading) return <MainLayout><div className="loading">Загрузка...</div></MainLayout>
  if (error) return <MainLayout><div className="error">Ошибка: {error}</div></MainLayout>

  return (
    <MainLayout>
      <div className="selection-page">
        <h1>Выберите альбом</h1>
        <div className="selection-grid">
          {albums.map(album => (
            <NavLink
              key={album.id}
              to={`/albums/${album.id}/photos`}
              className="selection-card"
            >
              <h3>{album.title}</h3>
              <p>ID: {album.id}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
