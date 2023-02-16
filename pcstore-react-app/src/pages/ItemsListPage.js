import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Items from "../components/Items/Items";
import data from "./data";

import CircularProgress from "@mui/material/CircularProgress";
import styled from "@emotion/styled";

const ItemsListPage = () => {
  const ListItem = styled(Typography)({
    // margin:"100rem",
    // padding:"10rem",
    // backgroundColor:"blue",
    // marginBottom: "1rem",
    // height:"01rem"
    fontSize: "0.7rem",
    // fontFamily:"Arial",
    // lineHeight:"2.5rem",
    // backgroundColor:"white"
  });
  const KeySpecBox = styled(Box)({
    // margin:"100rem",
    // padding:"1rem",
    // backgroundColor:"blue",
    // marginBottom: "1rem",
    // height:"01rem"
    // fontSize:"0.7rem",
    // fontFamily:"Arial",
    // lineHeight:"2.5rem",
    // backgroundColor:"white",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    // borderRight:"1px solid #d6d6d6",
    // borderBottom: {
    //   borderBottom: '1px solid ',
    //   '&:nth-last-child(1)': {
    //     borderBottom: 'none'
    //  }
    //  },
    padding: "0.5rem",
    "&:not(:last-child)": {
      borderRight: "1px solid #d6d6d6",
    },
  });
  const [items, setItems] = useState("");
  useEffect(() => {
    try {
      // axios.get('http://localhost:4000/get-products?filterBy=category&filterValue=Gaming laptop&order=-1&page=1&limit=10').then((response) => {
      //   // console.log(response.data);
      //   setItems(response.data.data);
      // });
      setItems(data);
    } catch (error) {
      console.log(`err`, error);
    }
  }, []);
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
      {items && 
        items.map((item, index) =>{
          return(
            <Box sx={{ backgroundColor: "#fff", display: "flex",flexWrap:'wrap',marginBottom: "1rem",padding:"1rem" }}>
          <Box>
          <Box  sx={{
                    display: "flex",
                    height: "14rem",
                    width:"14rem",
                    justifyContent: "center",
                    padding: "0.2rem",
                  }}>
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
          <Box sx={{ backgroundColor: "" ,flex:1,padding:"0.8rem"}}>
            <Typography>{item.name}</Typography>
            <Typography sx={{fontSize: "1.2rem",fontWeight:"bold"}}>Rs.{item&&item.price}</Typography>
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
          )
        })
        
      }
    </Box>
  );
};

export default ItemsListPage;
