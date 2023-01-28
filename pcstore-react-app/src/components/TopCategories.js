import { Button, Card, CardActions, CardContent, CardMedia, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LaptopIcon from '@mui/icons-material/Laptop';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

const StyledCard=styled(Card)({
   flexShrink:0,flexBasis:'auto', width: '15rem' ,display:'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'
})
const TopCategories = () => {
  return (
    <Box sx={{backgroundColor:"#fff",paddingTop:'1rem'}}>
        <Typography sx={{paddingLeft:'1rem'}} variant='h5'>Top Categories</Typography>
    <Box sx={{padding:"1rem 0", display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'100%', height:'10rem', backgroundColor:"#fff",overflow:"auto",
  scrollbarWidth: 'thin',
  '&::-webkit-scrollbar': {
    width: '100.1em',
  },
  '&::-webkit-scrollbar-track': {
    background: "#f1f1f1",
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555'
  } 
  }}>

    
    <StyledCard>
    <SportsEsportsIcon sx={{fontSize: 50}}/>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          Gaming Laptops
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
    </StyledCard>
    <StyledCard>
    {/* <SportsEsportsIcon sx={{fontSize: 50}}/> */}
    <LaptopIcon sx={{fontSize: 50}}/>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          Laptops
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
    </StyledCard>
    <StyledCard>
    {/* <SportsEsportsIcon sx={{fontSize: 50}}/> */}
    <DevicesOtherIcon sx={{fontSize: 50}}/>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          Accessories
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
    </StyledCard>
    
    </Box>
    </Box>
  )
}

export default TopCategories