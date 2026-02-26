import './PostList.css'
import { useMemo, useCallback, useState } from 'react'
import { PostCard } from '../../entities/post/ui/PostCard'
import { PostLengthFilter, filterByLength } from '../../features/PostLengthFilter'
import { useGetPostsQuery, useGetPostsByUserIdQuery } from '@/entities/post/api/postsApi'
import type { Post } from '@/entities/post/model/types'
import { withLoading } from '@/shared/lib/hoc/withLoading'

type Props = {
  isLoading?: boolean
  error?: string
  posts?: Post[]
  userId?: number
}

type PostListContentProps = {
  posts: Post[]
}

const PostListContent = ({ posts }: PostListContentProps) => (
  <section className="post-list">
    {posts.map(post => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
      />
    ))}
  </section>
)

const PostListWithLoading = withLoading<{
  posts: Post[]
  isLoading: boolean
  error?: string
}>(PostListContent)

export const PostList = ({
  isLoading: externalLoading,
  error: externalError,
  posts: externalPosts,
  userId
}: Props) => {
  const [minLength, setMinLength] = useState(0)
  const [maxLength, setMaxLength] = useState(50)

  // RTK Query
  const allPostsQuery = useGetPostsQuery()
  const userPostsQuery = useGetPostsByUserIdQuery(userId ?? 0, {
    skip: !userId
  })

  const fetchedPosts =
    userId
      ? userPostsQuery.data ?? []
      : allPostsQuery.data ?? []

  const isQueryLoading =
    userId
      ? userPostsQuery.isLoading
      : allPostsQuery.isLoading

  const queryError =
    userId
      ? userPostsQuery.error
      : allPostsQuery.error

  // ✅ Всегда массив
  const posts: Post[] = externalPosts ?? fetchedPosts ?? []

  const isLoading = externalLoading ?? isQueryLoading
  const error = externalError ?? (queryError ? 'Failed to load posts' : undefined)

  const handleFilterChange = useCallback((min: number, max: number) => {
    setMinLength(min)
    setMaxLength(max)
  }, [])

  const filteredPosts = useMemo(() => {
    return filterByLength(posts, minLength, maxLength)
  }, [posts, minLength, maxLength])

  return (
    <div className="post-list-wrapper">
      <PostLengthFilter
        minLength={minLength}
        maxLength={maxLength}
        onFilterChange={handleFilterChange}
      />

      <div className="post-list-container">
        <PostListWithLoading
          isLoading={isLoading}
          error={error}
          posts={filteredPosts}
        />
      </div>
    </div>
  )
}