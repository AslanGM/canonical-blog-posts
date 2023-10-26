import { Col } from '@canonical/react-components'
import { PostProps } from '@utils'
import { ReactElement } from 'react'
import styles from './post.module.scss'

export default function Post({
    thumbnail,
    alt,
    title,
    link,
    authorName,
    authorLink,
    date,
    taxonomyTopicName,
    catName,
    taxonomyTopicSlug
}: PostProps): ReactElement {
    return (
        <Col
            element="article"
            size={4}
            medium={2}
            className={`${styles.post} ${
                taxonomyTopicSlug ? styles[`post--${taxonomyTopicSlug}`] : ''
            }`}
        >
            <div className={styles.post__header}>
                {taxonomyTopicName && (
                    <h5 className="p-muted-heading u-no-padding--top u-no-margin--bottom">
                        {taxonomyTopicName}
                    </h5>
                )}
            </div>
            <div className={styles.post__inner}>
                {thumbnail && (
                    <a
                        href={link}
                        className={styles.post__image}
                        title={title ? title : 'No title'}
                    >
                        <img
                            src={thumbnail}
                            alt={alt}
                        />
                    </a>
                )}
                <h3 className={`${styles.post__title} p-heading--4`}>
                    <a href={link}>{title ? title : 'No title'}</a>
                </h3>
                <p className="u-no-margin--bottom">
                    <em>
                        by <a href={authorLink}>{authorName}</a> on {date}
                    </em>
                </p>
            </div>
            {catName && <p className={`${styles.post__footer} p-text--small`}>{catName}</p>}
        </Col>
    )
}
