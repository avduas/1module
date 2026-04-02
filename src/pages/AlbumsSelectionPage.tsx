import { NavLink } from 'react-router-dom'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { UserTabs } from '@/widgets/UserTabs'
import { useGetAlbumsQuery, type Album } from '@/entities'
import './SelectionPage.css'
import { ItemList } from '@/shared/ui/ItemList'

export const AlbumsSelectionPage = () => {
  const { data: albums = [], isLoading: loading, error } = useGetAlbumsQuery()
  // `albums` already has the correct type inferred from the hook, but
  // the exported `Album` type is available for explicit annotations if
  // needed elsewhere.

  if (loading) return <MainLayout><div className="loading">Загрузка...</div></MainLayout>
  if (error) return <MainLayout><div className="error">Ошибка: Failed to fetch albums</div></MainLayout>

  return (
    <MainLayout>
      <UserTabs />
      <div className="selection-page">
        <h1>Выберите альбом</h1>
        <div className="selection-grid">
          <ItemList
            items={albums}
            renderItem={album => (
              <NavLink
                key={album.id}
                to={`/albums/${album.id}/photos`}
                className="selection-card"
              >
                <h3>{album.title}</h3>
                <p>ID: {album.id}</p>
              </NavLink>
            )}
          />
        </div>
      </div>
    </MainLayout>
  )
}

