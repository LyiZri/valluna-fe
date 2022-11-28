import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Box, Input, Tab, Tabs, TextField } from '@mui/material'
import { KlTab, KlTabs } from '../kl-tabs';
import { config } from "@/config"
import KlInput from '../kl-search-input';
import KlIcon from '../kl-icons/jndex';
import { useRouter } from 'next/router';


enum ERoute{
    HOME = "/",
    ALL_GAMES = "/all-games",
    ARTICLES="/articles"
}


export default function Header() {
    const [tabNum, setTabNum] = useState(0)
    const router = useRouter()
    useEffect(()=>{
        if(router?.route == ERoute.HOME){
            setTabNum(0)
        }else if(router?.route == ERoute.ALL_GAMES){
            setTabNum(1)
        }else if(router?.route == ERoute.ARTICLES){
            setTabNum(2)
        }
    },[router?.route])
    const onTabChange = (event: React.SyntheticEvent, _tabNum: number) => {
        if(_tabNum == 0){
            router.push(ERoute.HOME)
        }else if(_tabNum == 1){
            router.push(ERoute.ALL_GAMES)
        }else if(_tabNum == 2){
            router.push(ERoute.ARTICLES)
        }
    }
    return (
        <Box className='bg-cardbg'>
            <Box className='mx-auto w-content flex justify-between'>
            <Box className='mt-3'>
                    <Image
                        width={139}
                        height={40}
                        alt=""
                        src={config.logo}
                    />
                </Box>
                <KlTabs value={tabNum} onChange={onTabChange} aria-label="basic tabs example">
                    <KlTab label="Home" value={0} />
                    <KlTab label="All games" value={1} />
                    <KlTab label="Articles" value={2} />
                </KlTabs>
                <Box className='my-2'>
                    <Box className='bg-cardbg-hover rounded-3xl  px-4 flex justify-between'>
                        <KlInput placeholder='Search...' className='h-8' />
                        <KlIcon className='cursor-pointer block leading-8' type='icon-Navicon_search'></KlIcon>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
