import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, styled, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LaptopIcon from '@mui/icons-material/Laptop';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import { red } from '@mui/material/colors';
import Slider from "react-slick";
import Items from './Items/Items';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const GamingLaptops = () => {
//   let items = [
//     {
//         image:"https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000",
//         title:"Acer Swift 3 Laptop (AMD Hexa Core Ryzen 5/8 GB/512)",
//         price:"59,999"
//     },
//     {
//         image:"https://i.pcmag.com/imagery/reviews/02lcg0Rt9G3gSqCpWhFG0o1-2..v1656623239.jpg",
//         title:"realme Book Slim Laptop (Core i5 11th Gen/8 GB/512 GB",
//         price:"Rs. 69,999"
//     },
//     {
//         image:"https://www.91-img.com/pictures/laptops/apple/apple-mjvp2hn-a-core-i5-5th-gen-4-gb-256-gb-ssd-mac-os-x-yosemite-73397-large-1.jpg?tr=q-80",
//         title:"Apple MacBook Air MJVP2HN/A Ultrabook (Core i5 5th Gen/4 GB/256 GB SSD/MAC OS X Yosemite)",
//         price:"Rs. 79,999"
//     },
//     {
//         image:"https://www.91-img.com/pictures/laptops/acer/acer-sf314-43-nx-ab1si-007-147407-v1-large-1.jpg",
//         title:"Acer Swift 3 Laptop (AMD Hexa Core Ryzen 5/8 GB/512)",
//         price:"Rs. 59,999"
//     },
//     {
//         image:"https://www.91-img.com/pictures/laptops/realme/realme-book-slim-146390-v1-large-1.jpg?tr=q-80",
//         title:"realme Book Slim Laptop (Core i5 11th Gen/8 GB/512 GB SSD/Windows 10)",
//         price:"Rs. 69,999"
//     },
//     {
//         image:"https://www.91-img.com/pictures/laptops/apple/apple-mjvp2hn-a-core-i5-5th-gen-4-gb-256-gb-ssd-mac-os-x-yosemite-73397-large-1.jpg?tr=q-80",
//         title:"Apple MacBook Air MJVP2HN/A Ultrabook (Core i5 5th Gen/4 GB/256 GB SSD/MAC OS X Yosemite)",
//         price:"Rs. 79,999"
//     },
//     {
//         image:"https://www.91-img.com/pictures/laptops/acer/acer-sf314-43-nx-ab1si-007-147407-v1-large-1.jpg",
//         title:"Acer Swift 3 Laptop (AMD Hexa Core Ryzen 5/8 GB/512)",
//         price:"Rs. 59,999"
//     },
//     {
//         image:"https://www.91-img.com/pictures/laptops/realme/realme-book-slim-146390-v1-large-1.jpg?tr=q-80",
//         title:"realme Book Slim Laptop (Core i5 11th Gen/8 GB/512 GB SSD/Windows 10)",
//         price:"Rs. 69,999"
//     },
//     {
//         image:"https://www.91-img.com/pictures/laptops/apple/apple-mjvp2hn-a-core-i5-5th-gen-4-gb-256-gb-ssd-mac-os-x-yosemite-73397-large-1.jpg?tr=q-80",
//         title:"Apple MacBook Air MJVP2HN/A Ultrabook (Core i5 5th Gen/4 GB/256 GB SSD/MAC OS X Yosemite)",
//         price:"Rs. 79,999"
//     },
// ]

const [items, setItems] = useState([])

useEffect(() => {
  try {
    axios.get('http://localhost:4000/get-products?filterBy=category&filterValue=Gaming laptop&order=-1&page=1&limit=10').then((response) => {
      // console.log(response.data);
      setItems(response.data.data);
    });
    
  } catch (error) {
    console.log(`err`,error);
  }


}, [])
  return (
    <Box sx={{backgroundColor:"#fff",paddingTop:'1rem',height:'auto' }}>
        <Typography sx={{paddingLeft:'1rem'}} variant='h5'>Gaming Laptops</Typography>
        <Box sx={{display:'flex',justifyContent:'center'}}>
{items.length==0&&<CircularProgress/>}
  
</Box>
  <Items items={items}/>


    </Box>
  )
}

export default GamingLaptops