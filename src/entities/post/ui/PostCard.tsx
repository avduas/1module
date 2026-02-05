import './PostCard.css'

type Props = {
  title: string
  body: string
}

export const PostCard = ({ title, body }: Props) => {
  return (
    <article className="post-card">
      <h3 className="post-card__title">{title}</h3>
      <p className="post-card__body">{body}</p>
    </article>
  )
}
