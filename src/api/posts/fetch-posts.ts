import { PostType } from '@utils'

export async function fetchPosts(): Promise<PostType[]> {
    try {
        const response = await fetch(
            'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json'
        )

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        const data = await response.json()
        return data
    } catch (error) {
        if (error instanceof Error) {
            // eslint-disable-next-line no-console
            console.error('Error fetching or processing data:', error.message)
            throw error
        } else {
            // If it's not an Error instance, we might have caught a different type of object, or even a primitive value
            // eslint-disable-next-line no-console
            console.error('An unknown error occurred:', error)
            throw new Error('An unknown error occurred')
        }
    }
}
