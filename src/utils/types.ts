type TermType = {
    name: string
    slug: string
}

type FeaturedMediaType = {
    alt_text: string | undefined
}

type EmbeddedType = {
    author: {
        name: string
        link: string
    }[]
    'wp:term': TermType[][]
    'wp:featuredmedia': FeaturedMediaType[]
}

export type PostType = {
    id: string
    title: {
        rendered: string
    }
    link: string
    featured_media: string
    date_gmt: string
    _embedded: EmbeddedType
}

export type PostProps = {
    thumbnail: string
    alt: string
    title: string
    link: string
    authorName: string
    authorLink: string
    date: string
    taxonomyTopicName: string
    taxonomyTopicSlug: string
    catName: string
}
