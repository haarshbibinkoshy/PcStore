import { Button, Card, CardActions, CardContent, CardMedia, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LaptopIcon from '@mui/icons-material/Laptop';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import Carousel from 'react-multi-carousel';
import "./TopCategories.css"

const StyledCard=styled(Card)({
   flexShrink:0,flexBasis:'auto', width: '15rem' ,display:'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'
})
const TopCategories = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const StyledCard=styled(Card)({
    flexShrink:0,flexBasis:'auto', width: '15rem' ,display:'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'
 })
  return (
    <Box sx={{backgroundColor:"#fff",paddingTop:'1rem'}}>
            <Typography sx={{paddingLeft:'1rem'}} variant='h5'>Top Categories</Typography>
            <Box sx={{padding:"0rem"}}>

            
    <Carousel  responsive={responsive}>
<div className="CategoryCard">
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
</div>
<div className="CategoryCard">
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
</div>
<div className="CategoryCard">
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
</div>



    
    
    </Carousel>
    </Box>
    </Box>
  )
}

export default TopCategories