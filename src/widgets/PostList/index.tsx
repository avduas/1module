import type { Post } from '../../app/App'
import { PostCard } from '../../entities/post/ui/PostCard'

type Props = {
  posts: Post[]
}

export const PostList = ({ posts }: Props) => {
  return (
    <section>
      {posts.map(post => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </section>
  )
}
