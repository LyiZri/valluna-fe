import Image from "next/image"
import KlCard from '@/components/kl-card'
import KlTitle from '@/components/kl-title'
import { getArticlesList } from '@/lib/service/articles'
import { IArticles } from '@/lib/type/articles'
import { Avatar, Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getBlurDataURL, getShortenStr, timestampToTime } from "@/lib/utils"
import KlIcon from "@/components/kl-icons/jndex"
import KlSkeleton from "@/components/kl-skeleton"
import { useRouter } from "next/router"

export default function AllNews() {
    const [list, setList] = useState<IArticles[]>()
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const getList = async () => {
        setLoading(true)
        const { data } = await getArticlesList({ article_status: 1 })
        setList(data)
        setLoading(false)
    }
    const goArticlesPage = (atid: string) => {
        router.push({ pathname: `/articles/[atid]`, query: { atid: atid } })
    }
    useEffect(() => {
        getList()
    }, [])
    return (
        <Box className="mb-8">
            <KlTitle title="All News" />
            {
                loading && <KlSkeleton gridSpace={3} width={631} height={278} skeletonLength={8} md={6} />
            }
            <Grid container spacing={2}>
                {
                    !loading && list?.map((item, index) => {
                        return <Grid item key={index} xs={12} md={6}>
                            <KlCard onClick={() => goArticlesPage(item.atid)}>
                                <Box className="flex justify-between cursor-pointer">

                                    <Image
                                        src={item.article_img}
                                        className="min-h-[135px] h-[135px] w-[200px] min-w-[200px] rounded-xl"
                                        width={200}
                                        height={100}
                                        placeholder="blur"
                                        blurDataURL={getBlurDataURL(278, 138)}
                                        alt="" />
                                    <Box className="ml-4 flex flex-col justify-between h-[135px]">
                                        <Box className=''>
                                            {getShortenStr(item.article_title, 60)}
                                        </Box>
                                        <Box className='flex justify-between'>
                                            <Box className='flex justify-start mt-1'>
                                                <span className='inline-block text-xs text-sec-stress leading-5 ml-2'>by {getShortenStr(item.author, 24)}</span>
                                            </Box>
                                            <Box className='mb-2'>
                                                <KlIcon type='icon-date' className='text-xs  text-sec-stress align-middle'></KlIcon>
                                                <div className='inline-block text-sec-stress text-xs ml-1'>{timestampToTime(item.optime)}</div>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </KlCard>
                        </Grid>
                    })
                }
            </Grid>
        </Box>
    )
}
