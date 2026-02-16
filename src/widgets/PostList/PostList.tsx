import './PostList.css'
import { Fragment, useMemo, useCallback, useState } from 'react'
import { PostCard } from '../../entities/post/ui/PostCard'
import { PostLengthFilter, filterByLength } from '../../features/PostLengthFilter'

export type Post = {
  id: number
  title: string
  body: string
  comments?: Array<{ id: number; text: string }>
}

const MOCK_POSTS: Post[] = [
  {
    id: 1,
    title: 'Первый пост',
    body: 'Это текст первого поста',
    comments: [
      { id: 1, text: 'Отличный пост!' },
      { id: 2, text: 'Согласен с автором' },
    ],
  },
  {
    id: 2,
    title: 'Второй пост',
    body: 'Это текст второго поста',
    comments: [
      { id: 1, text: 'Хороший контент' },
    ],
  },
  {
    id: 3,
    title: 'Третий пост с длинным заголовком',
    body: 'Это текст третьего поста',
    comments: [
      { id: 1, text: 'Очень информативно' },
      { id: 2, text: 'Спасибо за информацию' },
      { id: 3, text: 'Буду ждать продолжения' },
    ],
  },
]

type Props = {
  isLoading?: boolean
  error?: string
}

export const PostList = ({ isLoading = false, error }: Props) => {
  const [minLength, setMinLength] = useState(0)
  const [maxLength, setMaxLength] = useState(50)

  const handleFilterChange = useCallback((min: number, max: number) => {
    setMinLength(min)
    setMaxLength(max)
  }, [])

  const filteredPosts = useMemo(
    () => filterByLength(MOCK_POSTS, minLength, maxLength),
    [minLength, maxLength]
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
