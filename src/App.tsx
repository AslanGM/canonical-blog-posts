import { BlogPosts, Header } from '@components'
import { ReactElement } from 'react'

function App(): ReactElement {
    return (
        <>
            <Header />
            <main>
                <BlogPosts />
            </main>
        </>
    )
}

export default App
