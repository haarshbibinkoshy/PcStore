import { Box, Stack, styled, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FindProduct from "../components/FindProduct";
import Footer from "../components/Footer";
import GamingLaptops from "../components/GamingLaptops";
import LatestLaptops from "../components/LatestLaptops";
import Navbar from "../components/Navbar";
import PopularLaptops from "../components/PopularLaptops";
// import TopCategories from "../components/TopCategories";
// import TopCategoriesCopy from "../components/";
import TopCategories from "../components/TopCategories/TopCategories";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { display, height } from "@mui/system";

const StyledBox = styled(Box)({
  // margin:"100rem",
  // padding:"10rem",
  // backgroundColor:"blue",
  marginBottom: "1rem",
  // height:"100rem"
});

const ItemPage = (props) => {
  const { state } = useLocation();
  const [item, setItem] = useState();
  const [mainImage, setMainImage] = useState();

  console.log(state, `state<<<<`);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:4000/get-product/${state}`)
        .then((response) => {
          console.log(response.data);
          setItem(response.data.data[0]);
          setMainImage(response.data.data[0].images[0]);
        });
    } catch (error) {
      console.log(`err`, error);
    }
  }, []);

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <Box sx={{ width: "75%" }}>
      <Box sx={{ backgroundColor: "#fff", paddingTop: "1rem", height: "auto" }}>
        <Typography>
          HP Pavilion 15-ec2004AX (3E3R5PA) Laptop (AMD Hexa Core Ryzen 5/8
          GB/512 GB SSD/Windows 10/4 GB)
        </Typography>
        <Box sx={{ display: "flex", backgroundColor: "blanchedalmond" }}>
          <Box sx={{ backgroundColor: "", width: "auto" }}>
            
            <Box component="img" sx={{
          
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
          objectFit: "contain",
          backgroundColor:"white",
          padding:"0.2rem",
          width:"294"
        }}
        alt="The house from the offer."
        src={mainImage}/>

            
            <Box sx={{ backgroundColor: "" ,display:"flex",justifyContent: "center",
    alignItems: "end" }}>
              {/* <ImageList
                sx={{ backgroundColor: "blue" ,objectFit:'contain'}}
                variant="quilted"
                cols={4}
                rowHeight={121}
              >
                {item &&
                  item.images.map((item) => (
                    <ImageListItem
                      key={item}
                      //  cols={item.cols || 1} rows={item.rows || 1}
                    //   sx={{ backgroundColor: "teal", objectFit: "contain" }}
                     
                    >
                      <img   src={item} alt={item} loading="lazy" />
                    </ImageListItem>
                  ))}
              </ImageList> */}
              <Box sx={{display:"flex"}}>

              {item &&
                  item.images.map((item) => (
                    <Box onClick={(e)=>{
                      setMainImage(item)
                    }}
        component="img"
        sx={{
          height: 33,
          width: 35,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
          objectFit: "contain",
          backgroundColor:"white",
          padding:"0.3rem",
          margin:"0.1rem"

        }}
        alt="The house from the offer."
        src={item}
      />

                  ))}
              </Box>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "gold", width: "" }}>key specs</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemPage;
