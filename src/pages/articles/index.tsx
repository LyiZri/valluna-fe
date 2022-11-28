import AllNews from '@/components/articles/all-news'
import KlArticles from '@/components/articles/kl-articles'
import Layout from '@/components/Layout'
import React from 'react'

export default function Articles() {
    return (
        <Layout>
            <KlArticles/>
            <AllNews/>
        </Layout>
    )
}
