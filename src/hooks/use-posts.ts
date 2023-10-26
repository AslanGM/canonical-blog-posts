import { fetchPosts } from '@api/posts/fetch-posts'
import { PostType } from '@utils'
import { useEffect, useState } from 'react'

const usePosts = (): PostType[] => {
    const [posts, setPosts] = useState<PostType[]>([])

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const data = await fetchPosts()
                setPosts(data)
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error('Error fetching posts:', error)
            }
        }

        fetchData()
    }, [])

    return posts
}

export default usePosts
