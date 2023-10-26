import { Row } from '@canonical/react-components'
import { Post } from '@components'
import { usePosts } from '@hooks'
import { PostType } from '@utils'
import moment from 'moment'
import { ReactElement } from 'react'

export default function BlogPosts(): ReactElement {
    const posts = usePosts()

    return (
        <Row>
            {posts.map((post: PostType) => (
                <Post
                    key={post.id}
                    title={post.title.rendered}
                    link={post.link}
                    thumbnail={post.featured_media}
                    alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || ''}
                    authorName={post._embedded?.author[0].name}
                    authorLink={post._embedded?.author[0].link}
                    date={moment(post.date_gmt).local().format('DD MMMM YYYY')}
                    taxonomyTopicName={post._embedded?.['wp:term'][2]?.[0]?.name}
                    taxonomyTopicSlug={post._embedded?.['wp:term'][2]?.[0]?.slug}
                    catName={post._embedded?.['wp:term'][0]?.[0]?.name}
                />
            ))}
        </Row>
    )
}
