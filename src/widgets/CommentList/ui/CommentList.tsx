import './CommentList.css'
import { useState, useCallback, useMemo, type MouseEventHandler } from 'react'

export type Comment = {
  id: number
  text: string
}

type Props = {
  comments: Comment[]
}

export const CommentList = ({ comments }: Props) => {
  const [showAllComments, setShowAllComments] = useState(false)

  const toggleShowAll = useCallback<MouseEventHandler<HTMLDivElement>>((e) => {
    e.preventDefault()
    setShowAllComments(prev => !prev)
  }, [])

  const { firstComment, restComments } = useMemo(() => {
    if (comments.length === 0) return { firstComment: null, restComments: [] }
    
    return {
      firstComment: comments[0],
      restComments: comments.filter((_, index) => index > 0),
    }
  }, [comments])

  if (!firstComment) {
    return <p>Нет комментариев</p>
  }

  const hasMoreComments = restComments.length > 0

  return (
    <div className="comment-list">
      <div className="comment-list__first">
        <h4 className="comment-list__first-title">Комментарий {firstComment.id}</h4>
        <p className="comment-list__first-text">{firstComment.text}</p>
      </div>

      {hasMoreComments && (
        <div
          className={`comment-list__preview ${showAllComments ? 'comment-list__preview--expanded' : ''}`}
          onClick={toggleShowAll}
        >
          <div className="comment-list__preview-content">
            <span className="comment-list__preview-icon">
              {showAllComments ? '▼' : '▶'}
            </span>
            <span className="comment-list__preview-text">
              {showAllComments
                ? 'Скрыть комментарии'
                : `Еще комментариев: ${restComments.length}`}
            </span>
          </div>
        </div>
      )}

      {showAllComments && hasMoreComments && (
        <div className="comment-list__expanded">
          {restComments.map(comment => (
            <div key={comment.id} className="comment-list__item">
              <h4 className="comment-list__item-title">Комментарий {comment.id}</h4>
              <p className="comment-list__item-text">{comment.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
