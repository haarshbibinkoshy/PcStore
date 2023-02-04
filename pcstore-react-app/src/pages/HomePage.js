import { Box, Stack, styled } from "@mui/material";
import React from "react";
import FindProduct from "../components/FindProduct";
import Footer from "../components/Footer";
import GamingLaptops from "../components/GamingLaptops";
import LatestLaptops from "../components/LatestLaptops";
import Navbar from "../components/Navbar";
import PopularLaptops from "../components/PopularLaptops";
// import TopCategories from "../components/TopCategories";
// import TopCategoriesCopy from "../components/";
import TopCategories from "../components/TopCategories/TopCategories";

const StyledBox = styled(Box)({
  // margin:"100rem",
  // padding:"10rem",
  // backgroundColor:"blue",
  marginBottom: "1rem",
  // height:"100rem"
});

const HomePage = () => {
  return (
    <Box sx={{ width: "75%" }}>
      <StyledBox>
        <FindProduct />
      </StyledBox>
      <StyledBox>
        <TopCategories />
      </StyledBox>
      <StyledBox>
        <PopularLaptops />
      </StyledBox>
      <StyledBox>
        <GamingLaptops/>
      </StyledBox>
      <StyledBox>
        <LatestLaptops/>
      </StyledBox>
    </Box>
  );
};

export default HomePage;
