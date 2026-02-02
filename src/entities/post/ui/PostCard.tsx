type Props = {
  title: string
  body: string
}

export const PostCard = ({ title, body }: Props) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  )
}
