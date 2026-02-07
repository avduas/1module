import './index.css'
import { Fragment } from 'react'
import type { Post } from '../../app/App'
import { PostCard } from '../../entities/post/ui/PostCard'

type Props = {
  posts: Post[]
}

export const PostList = ({ posts }: Props) => {
  return (
    <section className="post-list">
      {posts.map(post => (
        <Fragment key={post.id}>
          <PostCard
            title={post.title}
            body={post.body}
          />
        </Fragment>
      ))}
    </section>
  )
}
