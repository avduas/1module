import { useParams } from 'react-router-dom'
import { MainLayout } from '@/shared/layouts/MainLayout'

export const AlbumPhotosPage = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <MainLayout>
      <div style={{ padding: '20px' }}>
        <h1>Альбом {id} </h1>
        {/* Photos grid component will be here */}
      </div>
    </MainLayout>
  )
}
