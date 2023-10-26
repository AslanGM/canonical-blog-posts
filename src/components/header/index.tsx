import { Col, Row } from '@canonical/react-components'
import { ReactElement } from 'react'
import styles from './header.module.scss'

export default function Header(): ReactElement {
    return (
        <header className={styles.header}>
            <Row>
                <Col
                    size={12}
                    className={styles.header__inner}
                >
                    <h1 className="p-heading--1">
                        Home Test from Canonical by{' '}
                        <a
                            href="https://aslangm.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Aslan Abdrashov
                        </a>
                    </h1>
                </Col>
            </Row>
        </header>
    )
}
