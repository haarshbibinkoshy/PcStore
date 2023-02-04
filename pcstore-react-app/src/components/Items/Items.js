import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./item.css";

const Items = (props) => {
  console.log(`props>>`, props);
  // console.log(`props>>>`,props);
  // let items = [
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
  // const SyledToolbar= styled(Toolbar)({
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   height: '10px',
  //   padding:'0px',
  //   border:'1px solid black'
  // })
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (

    <Carousel responsive={responsive}>
    
      {props.items.length != 0 &&
        props.items.map((item, i) => {
          return (
            
            <div key={i} className="item">
            
              <Card
                sx={{
                  boxShadow: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  maxWidth: 245,
                  minWidth: 245,
                  marginRight: "10px",
                  border: "1px solid white",
                  "&:hover": {
                    border: "1px  solid #FFA500",
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    height: "14rem",
                    justifyContent: "center",

                    padding: "0.2rem",
                  }}
                >
                  <CardMedia
                    sx={{ objectFit: "contain" }}
                    component="img"
                    height="90%"
                    width="294"
                    image={item?.images[0]}
                    alt="Paella dish"
                  />
                </Box>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    alignContent={"center"}
                    variant="subtitle2"
                    color=""
                  >
                    {`${item.name.substring(0, 20)}`}
                    {/* {`${item.name}`} */}
                  </Typography>
                  <Typography variant="subtitle1" color="orangered">
                    Rs. {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
    </Carousel>

  );
};

export default Items;
