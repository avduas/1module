import { useState, useEffect } from 'react'

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export const usePosts = (userId?: number) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        setError(null)

        const url = userId
          ? `https://jsonplaceholder.typicode.com/users/${userId}/posts`
          : 'https://jsonplaceholder.typicode.com/posts'

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [userId])

  return { posts, loading, error }
}
