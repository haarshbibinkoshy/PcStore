import { Box, Stack, styled } from '@mui/material'
import React from 'react'
import FindProduct from '../components/FindProduct'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TopCategories from '../components/TopCategories'

const StyledBox=styled(Box)({
// margin:"100rem",
// padding:"10rem",
// backgroundColor:"blue",
marginBottom:"1rem",
// height:"100rem"
})

const HomePage = () => {
  return (
    <Box sx={{ width:"75%" }}>

   <StyledBox>

    <FindProduct/>
   </StyledBox>
   <StyledBox>

    <TopCategories/>
   </StyledBox>
    
    </Box>
  )
}

export default HomePage