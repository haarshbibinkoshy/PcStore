import { Button, Card, CardActions, CardContent, CardMedia, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LaptopIcon from '@mui/icons-material/Laptop';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import Carousel from 'react-multi-carousel';
import "./TopCategories.css"
import { Link, useNavigate } from 'react-router-dom';

const StyledCard=styled(Card)({
   flexShrink:0,flexBasis:'auto', width: '15rem' ,display:'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'
})
const TopCategories = () => {
  const navigate = useNavigate()
  function handleClick(e) {
    console.log(e.target.value);
    //http://localhost:4000/get-products?filterBy=category&filterValue=Gaming laptop&order=-1&page=1&limit=10
    // navigate(`/itemsPage/get-products?filterBy=category&filterValue=Gaming laptop&order=-1&page=1&limit=10`)
    // navigate(`/itemsPage/search-product?searchBy=brand&value=${e.target.value}`,{state:""})
  }
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
    ,border: "1px solid white",
    "&:hover": {
      border: "1px  solid #FFA500",
      cursor: "pointer",
    },})
  return (
    <Box sx={{backgroundColor:"#fff",paddingTop:'1rem'}}>
            <Typography sx={{paddingLeft:'1rem'}} variant='h5'>Top Categories</Typography>
            <Box sx={{padding:"0rem"}}>

            
    <Carousel  responsive={responsive}>
    
      
  
<div  className="CategoryCard">
<Link to="/itemsPage/get-products?filterBy=category&filterValue=Gaming laptop&order=1" style={{textDecoration: "none"}}>
<StyledCard  >
    <SportsEsportsIcon sx={{fontSize: 50}}/>
      <CardContent>
        <Typography  gutterBottom variant="subtitle1" component="div">
          Gaming Laptops 
        </Typography>
     
      </CardContent>
    </StyledCard>
    </Link>
</div>
<div className="CategoryCard">
<Link to="/itemsPage/get-products?filterBy=category&filterValue=Laptop&order=1" style={{textDecoration: "none"}}>
<StyledCard>
    {/* <SportsEsportsIcon sx={{fontSize: 50}}/> */}
    <LaptopIcon sx={{fontSize: 50}}/>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          Laptops
        </Typography>
       
      </CardContent>
    </StyledCard>
    </Link>
</div>
<div className="CategoryCard">
<StyledCard>
    {/* <SportsEsportsIcon sx={{fontSize: 50}}/> */}
    <DevicesOtherIcon sx={{fontSize: 50}}/>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          Accessories
        </Typography>
      
      </CardContent>
    </StyledCard>
</div>



    
    
    </Carousel>
    </Box>
    </Box>
  )
}

export default TopCategories