import './PostList.css'
import { Fragment, useMemo, useCallback, useState } from 'react'
import { PostCard } from '../../entities/post/ui/PostCard'
import { PostLengthFilter, filterByLength } from '../../features/PostLengthFilter'
import { usePosts, type Post as APIPost } from '@/features/PostList/model/hooks'

export type Post = APIPost & {
  comments?: Array<{ id: number; text: string }>
}

type Props = {
  isLoading?: boolean
  error?: string
  posts?: Post[]
  userId?: number
}

export const PostList = ({ isLoading: externalLoading, error: externalError, posts: externalPosts, userId }: Props) => {
  const [minLength, setMinLength] = useState(0)
  const [maxLength, setMaxLength] = useState(50)

  // Use usePosts hook if userId is provided or no external posts are provided
  const { posts: fetchedPosts, loading: hookLoading, error: hookError } = usePosts(userId)

  const posts = (externalPosts || fetchedPosts) as Post[]
  const isLoading = externalLoading ?? hookLoading
  const error = externalError ?? hookError

  const handleFilterChange = useCallback((min: number, max: number) => {
    setMinLength(min)
    setMaxLength(max)
  }, [])

  const filteredPosts = useMemo(
    () => filterByLength(posts, minLength, maxLength),
    [minLength, maxLength, posts]
  )

  if (isLoading) {
    return <div className="loading">Загрузка...</div>
  }

  if (error) {
    return <div className="error">Ошибка: {error}</div>
  }

  return (
    <>
      <div className="post-list-wrapper">
        <PostLengthFilter
          minLength={minLength}
          maxLength={maxLength}
          onFilterChange={handleFilterChange}
        />

        <div className="post-list-container">
          <section className="post-list">
            {filteredPosts.map(post => (
              <Fragment key={post.id}>
                <PostCard
                  title={post.title}
                  body={post.body}
                  comments={post.comments}
                />
              </Fragment>
            ))}
          </section>
        </div>
      </div>
    </>
  )
}
