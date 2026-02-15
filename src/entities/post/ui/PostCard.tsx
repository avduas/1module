import './PostCard.css'
import { memo } from 'react'
import { CommentList, type Comment } from '../../../widgets/CommentList'

type Props = {
  title: string
  body: string
  comments?: Comment[]
}

export const PostCard = memo(({ title, body, comments }: Props) => {
  return (
    <article className="post-card">
      <h3 className="post-card__title">{title}</h3>
      <p className="post-card__body">{body}</p>
      {comments && comments.length > 0 && (
        <div className="post-card__comments">
          <h4 className="post-card__comments-title">Комментарии</h4>
          <CommentList comments={comments} />
        </div>
      )}
    </article>
  )
})
