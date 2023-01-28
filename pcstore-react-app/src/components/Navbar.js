import { AppBar, Box, Button, InputBase, styled, Toolbar, Typography } from '@mui/material'
import { height, width } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';
// import { red } from '@mui/material/colors'
import React from 'react'

const SyledToolbar= styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  height: '10px',
  padding:'0px',
  border:'1px solid black'
})

const Search=styled('div')(({theme}) =>({
  backgroundColor:"white",
  padding:"0 10px",
  width:"40%"
}))

const Navbar = () => {
  return (
    <Box >

    
    <AppBar position='sticky' sx={{height:'65px'}}>
    <SyledToolbar>
      <Box sx={{backgroundColor:'green'}}>

      <Typography variant='h6'>
        logo
      </Typography>
      </Box>
      <Search >
      <InputBase sx={{width:'100%'}} placeholder="Search...">
        
      </InputBase>
      {/* <SearchIcon sx={{color:'black'}}/> */}
      </Search>
      <Box sx={{backgroundColor:'black'}}>
        asd
      </Box>
    </SyledToolbar>
    </AppBar>
    </Box>
  )
}

export default Navbar