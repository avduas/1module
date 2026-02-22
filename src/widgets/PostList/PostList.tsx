import './PostList.css'
import { useMemo, useCallback, useState } from 'react'
import { PostCard } from '../../entities/post/ui/PostCard'
import { PostLengthFilter, filterByLength } from '../../features/PostLengthFilter'
import { usePosts, type Post as APIPost } from '@/features/PostList/model/hooks'
import { withLoading } from '@/shared/lib/hoc/withLoading'

export type Post = APIPost & {
  comments?: Array<{ id: number; text: string }>
}

type Props = {
  isLoading?: boolean
  error?: string
  posts?: Post[]
  userId?: number
}

const PostListContent = ({ posts = [] }: { posts: Post[] }) => (
  <section className="post-list">
    {posts.map(post => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        comments={post.comments}
      />
    ))}
  </section>
)

const PostListWithLoading = withLoading<{ posts: Post[]; isLoading: boolean; error?: string }>(
  PostListContent
)

export const PostList = ({ isLoading: externalLoading, error: externalError, posts: externalPosts, userId }: Props) => {
  const [minLength, setMinLength] = useState(0)
  const [maxLength, setMaxLength] = useState(50)

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

  return (
    <>
      <div className="post-list-wrapper">
        <PostLengthFilter
          minLength={minLength}
          maxLength={maxLength}
          onFilterChange={handleFilterChange}
        />

        <div className="post-list-container">
          <PostListWithLoading
            isLoading={isLoading}
            error={error ?? undefined}
            posts={filteredPosts}
          />
        </div>
      </div>
    </>
  )
}
