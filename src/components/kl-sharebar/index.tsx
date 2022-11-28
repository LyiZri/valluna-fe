import { Avatar, Box } from '@mui/material'
import React from 'react'
import KlIcon from '../kl-icons/jndex'


export const AvatarBox = ({ background = "#393944", width = "36px", height = "36px", children }) => {
    return (
        <Avatar className='cursor-pointer' sx={{ background: background, width: width, height: height }}>
            {children}
        </Avatar>
    )
}

export default function KlShareBar() {
    return (
        <Box className='flex justify-between text-sm text-second w-1/5'>
            <div className='my-auto text-sm'>
            share
            </div>
            <AvatarBox>
                <KlIcon type='' />
            </AvatarBox>
            <AvatarBox>
                <KlIcon className='text-sm' type='icon-a-facebook1' />
            </AvatarBox>
            <AvatarBox>
                <KlIcon className='text-sm' type='icon-a-twitter2' />
            </AvatarBox>
            <AvatarBox>
                <KlIcon className='text-sm' type='icon-discord' />
            </AvatarBox>
        </Box>
    )
}
