import React, { useEffect, useState } from 'react'
import Image from "next/image"
import KlTitle from '@/components/kl-title'
import { Box, Grid, Avatar, Skeleton } from '@mui/material'
import { getArticlesList } from "@/lib/service/articles"
import { IArticles } from '@/lib/type/articles'
import KlCard from '@/components/kl-card'
import KlIcon from '@/components/kl-icons/jndex'
import { getBlurDataURL, getShortenStr, timestampToTime } from '@/lib/utils'
import KlSkeleton from '@/components/kl-skeleton'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function KlArticles() {
    const [list, setList] = useState<IArticles[]>([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const getList = async () => {
        setLoading(true)
        let { data } = await getArticlesList({ featured: 1 })
        //精选文章长度不够 补充
        if (data.length < 8) {
            const { data: _data } = await getArticlesList({ featured: 0, article_status: 1 })
            console.log(_data);

            data = [...data, ..._data.slice(0, 8 - data.length)]
        }
        setList(data)
        setLoading(false)
    }
    const goArticlesPage = (article_title: string) => {
        router.push({pathname:`/articles/[atid]`,query:{atid:article_title}})
    }
    useEffect(() => {
        getList()
    }, [])
    return (
        <Box>
            <KlTitle title="Klick's Articles" />
            {
                loading && <KlSkeleton gridSpace={3} width={301} height={308} skeletonLength={8} md={3} />
            }
            <Grid container spacing={3}>
                {
                    !loading && list.map((item, index) => {
                        return <Grid item xs={12} md={3} key={index}>
                            {/* <Link href={`/articles/${item.atid}`}> */}
                            <KlCard key={index} className="cursor-pointer" onClick={()=>goArticlesPage(item.atid)}>
                                <Image
                                    src={item.article_img}
                                    className="h-[158px] rounded-xl"
                                    width={278}
                                    height={138}
                                    placeholder="blur"
                                    blurDataURL={getBlurDataURL(278, 138)}
                                    alt="" />
                                <Box className=' mt-4'>
                                    {getShortenStr(item.article_title, 38)}
                                </Box>
                                <Box className='flex justify-between'>
                                    <Box className='flex justify-start mt-1'>
                                        <span className='inline-block text-xs text-sec-stress leading-5 '>by {getShortenStr(item.author, 12)}</span>
                                    </Box>
                                    <Box className=''>
                                        <KlIcon type='icon-date' className='text-xs  text-sec-stress align-middle'></KlIcon>
                                        <div className='inline-block text-sec-stress text-xs ml-1'>{timestampToTime(item.optime)}</div>
                                    </Box>
                                </Box>
                            </KlCard>
                            {/* </Link> */}
                        </Grid>
                    })
                }
            </Grid>
        </Box>
    )
}
