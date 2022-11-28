import React, { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import { IArticles } from '@/lib/type/articles'
import { getArticleDetails, getArticlesList } from '@/lib/service/articles'
import { useRouter } from 'next/router'
import { Box, Skeleton } from '@mui/material'
import KlShareBar from '@/components/kl-sharebar'
import KlIcon from '@/components/kl-icons/jndex'
import { timestampToTime } from '@/lib/utils'




const ArticleSkeletonBox = () => {
    return (
        <Box>
            <Skeleton variant='text' sx={{ fontSize: "2rem", bgcolor: 'grey.900' }} />
            <Skeleton variant='text' sx={{ fontSize: "2rem", bgcolor: 'grey.900' }} />
            <Skeleton variant='text' sx={{ fontSize: "2rem", bgcolor: 'grey.900' }} />
            <br />
            <Skeleton variant="rounded" height={360} sx={{ bgcolor: 'grey.900' }} />
        </Box>
    )
}

interface IATDeatils {
    pageValue: IArticles
}

const ArticlePageDetails = ({ pageValue }: IATDeatils) => {
    return (

        <Box>
            <Box className='text-2xl font-bold break-words'>
                {pageValue.article_title}{pageValue.article_title}
            </Box>
            <Box className='flex justify-between w-full mt-4'>
                <Box className='flex justify-start'>
                    <Box className='text-sm text-second mr-8'>
                        by   {pageValue.author}
                    </Box>
                    <Box className='text-second'>
                        <KlIcon type='icon-date' className='text-sm  text-second align-middle'></KlIcon>
                        <div className='inline-block text-second text-sm ml-2'>{timestampToTime(pageValue.optime)}</div>
                    </Box>
                </Box>
                <KlShareBar />
            </Box>
            <section className='p-4 mt-4 rounded-lg bg-cardbg-hover'>
                <div dangerouslySetInnerHTML={{__html:pageValue.content}}/>
            </section>
        </Box>
    )
}


export default function ArticleGlid() {
    const [loading, setLoading] = useState(true)
    const [pageValue, setPageValue] = useState<IArticles>()
    const router = useRouter()
    const getPageValue = async () => {
        console.log(router);
        setLoading(true)
        const { data } = await getArticleDetails({ atid: router.query.atid })
        setPageValue(data)
        setLoading(false)
    }
    useEffect(() => {
        getPageValue()
    }, [])
    return (
        <Layout>
            <Box className='bg-cardbg rounded-2xl p-4'>
                {
                    loading &&
                    <ArticleSkeletonBox />
                }
                {
                    !loading && pageValue &&
                    <ArticlePageDetails pageValue={pageValue} />
                }
            </Box>
        </Layout>
    )
}
