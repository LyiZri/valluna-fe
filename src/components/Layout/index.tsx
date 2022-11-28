import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import Footer from './footer'
import Header from './header'

interface IProps {
    children?: React.ReactNode
}

export default function Layout({ children }: IProps) {
    return (
        <Box className='min-h-screen flex flex-col justify-between bg-pagebg'>
            <Header />
            <Box className=' w-8/12 mx-auto'>
                {children}
            </Box>
            <Footer />
        </Box>
    )
}
