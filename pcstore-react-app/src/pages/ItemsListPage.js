import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Items from "../components/Items/Items";
import data from "./data";

import CircularProgress from "@mui/material/CircularProgress";
import styled from "@emotion/styled";
import { useLocation, useNavigate } from "react-router-dom";


const ItemsListPage = () => {
  const navigate = useNavigate();
  const ListItem = styled(Typography)({
    fontSize: "0.7rem",
  });
  const KeySpecBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: "0.5rem",
    "&:not(:last-child)": {
      borderRight: "1px solid #d6d6d6",
    },
  });
  const [items, setItems] = useState("");
  // const [searchParams, setSearchParams] = useState("");
  // const [currentUrl, setcurrentUrl] = useState("");

  const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    try {
       setItems("")
      console.log(`locat>>>`, location);
      // setSearchParams(location.search);
      // setcurrentUrl(location.pathname)
      let url = "http://localhost:4000/";
      // let currentUrl=window.location.href;
      // setcurrentUrl(window.location.href)
      // setSearchParams(window.location.search)
      // let searchParams=window.location.search;
      if (location.pathname.includes("search-product")) {
        url += `search-product${location.search}`;
      } else if (location.pathname.includes("get-products")) {
        url += `get-products${location.search}`;
      }
      // console.log(`check>>>`,window.location);

      axios.get(url).then((response) => {
        // console.log(response.data);
        setItems(response.data.data);
      });
      console.log(`url>>`, url);
      // setItems(data);
    } catch (error) {
      console.log(`err`, error);
    }
  }, [location]);

  console.log(`items>>`, items);
  return (
    <Box
      sx={{
        backgroundColor: "#ececec",
        paddingTop: "1rem",
        height: "auto",
        width: "75%",
      }}
    >
      {/* <Typography sx={{paddingLeft:'1rem'}} variant='h5'>Gaming Laptops</Typography>
    <Box sx={{display:'flex',justifyContent:'center'}}>
{items.length==0&&<CircularProgress/>}

</Box>
<Items items={items}/> */}
      {/* {items.map((item, index) =>{
  return (
    <Box></Box>
  )
})} */}
{items.length==0&&<Box
sx={{
                backgroundColor: "#fff",
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "1rem",
                padding: "1rem",
               justifyContent: "center",
              }}
><CircularProgress/></Box> }
      {items &&
        items.map((item, index) => {
          return (
            <Box
              onClick={(e) => {
                e.preventDefault();
                navigate(`/itemPage/${item.name.replace(/[ ,\/]/g, "-")}`, {
                  state: item._id,
                });
              }}
              sx={{
                backgroundColor: "#fff",
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "1rem",
                padding: "1rem",
                border: "1px solid white",
                "&:hover": {
                  border: "1px  solid #FFA500",
                  cursor: "pointer",
                },
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    height: "14rem",
                    width: "14rem",
                    justifyContent: "center",
                    padding: "0.2rem",
                  }}
                >
                  {/* <Box
              component="img"
              sx={{
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
                objectFit: "contain",
                backgroundColor: "white",
                // padding: "0.2rem",
                maxWidth: "90%",
                // minWidth: "1rem",
                height: "14rem",
              }}
              alt="The house from the offer."
              src={item.images[0]}
            /> */}
                  <CardMedia
                    sx={{ objectFit: "contain" }}
                    component="img"
                    height="90%"
                    width="294"
                    image={item?.images[0]}
                    alt="Paella dish"
                  />
                </Box>
              </Box>
              <Box sx={{ backgroundColor: "", flex: 1, padding: "0.8rem" }}>
                <Typography>{item.name}</Typography>
                <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Rs.{item && item.price}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                  }}
                >
                  {/* <KeySpecMainBox> */}
                  <KeySpecBox>
                    <Typography>Performance</Typography>

                    {item &&
                      Object.entries(item.performance).map(([key, val]) => {
                        return val && <ListItem>{val}</ListItem>;
                      })}
                    {item && (
                      <ListItem>
                        {item?.memory?.capacity}
                        {item?.memory?.ramType}RAM
                      </ListItem>
                    )}
                  </KeySpecBox>
                  <KeySpecBox>
                    <Typography>Design</Typography>
                    {/* <ListItem>asd</ListItem> */}
                    {item && (
                      <ListItem>{item?.displayDetails?.displaySize}</ListItem>
                    )}
                    {item && (
                      <ListItem>
                        {item?.displayDetails?.displayResolution}
                      </ListItem>
                    )}
                    {item && (
                      <ListItem>{item?.generalInformation.dimensions}</ListItem>
                    )}
                  </KeySpecBox>
                  <KeySpecBox>
                    <Typography>Storage</Typography>
                    {<ListItem>{item?.storage?.ssdCapacity}</ListItem>}
                  </KeySpecBox>
                  <KeySpecBox>
                    <Typography> Battery</Typography>
                    {item &&
                      Object.entries(item.battery).map(([key, val]) => {
                        return val && <ListItem>{val}</ListItem>;
                      })}
                  </KeySpecBox>
                </Box>
              </Box>
            </Box>
          );
        })}
    </Box>
  );
};

export default ItemsListPage;
