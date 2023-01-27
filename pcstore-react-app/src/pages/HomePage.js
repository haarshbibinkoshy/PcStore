import { Box, Stack } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <Stack direction={'column'} sx={{backgroundColor:'blueviolet'}}>

    <Navbar/>
    HomePage
    <Footer/>
    </Stack>
  )
}

export default HomePage