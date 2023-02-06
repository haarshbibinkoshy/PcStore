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
  console.log(state, `state<<<<`);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:4000/get-product/${state}`)
        .then((response) => {
          console.log(response.data);
          setItem(response.data.data[0]);
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
          <Box sx={{ backgroundColor: "teal", width: "auto" }}>
            images
            <Box>
              <ImageList
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
              </ImageList>
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "gold", width: "65%" }}>key specs</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemPage;
