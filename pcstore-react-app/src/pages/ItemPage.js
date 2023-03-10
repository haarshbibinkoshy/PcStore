import { Box, Button, ListItemText, Stack, styled, Table, TableBody, TableContainer, TableRow, Typography } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import FindProduct from "../components/FindProduct"
import Footer from "../components/Footer"
import GamingLaptops from "../components/GamingLaptops"
import LatestLaptops from "../components/LatestLaptops"
import Navbar from "../components/Navbar"
import PopularLaptops from "../components/PopularLaptops"
// import TopCategories from "../components/TopCategories";
// import TopCategoriesCopy from "../components/";
import TopCategories from "../components/TopCategories/TopCategories"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import { display, height } from "@mui/system"
import { TableCell } from "@material-ui/core"
import TableList from "../components/TableList/TableList"
import CircularProgress from "@mui/material/CircularProgress"
import LaptopIcon from '@mui/icons-material/Laptop';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import WifiIcon from '@mui/icons-material/Wifi';

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
})
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
  '&:not(:last-child)': {
    borderRight: '1px solid #d6d6d6',
  },
})
const KeySpecMainBox = styled(Box)({
  // margin:"100rem",
  // padding:"1rem",
  // backgroundColor:"blue",
  // marginBottom: "1rem",
  // height:"01rem"
  // fontSize:"0.7rem",
  // fontFamily:"Arial",
  // lineHeight:"2.5rem",
  backgroundColor: "white",
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
  '&:not(:last-child)': {
    borderRight: '1px solid #d6d6d6',
  },
})
const Container = styled(Box)({

  backgroundColor: "white",
  padding: "0.5rem",
  //  display: "flex",
  justifyContent: "center",
  textAlign: "left",
})
const TypographyStyle = styled(Typography)({

  color: "#00bfff",
  fontSize: "1.3rem",
})

const KeyHighlightBox = styled(Box)({
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
  // justifyContent: "space-around",
  // flexWrap:"wrap",
  // alignItems: "center",
  // flexDirection: "column",
  flex: 1,
  // borderRight:"1px solid #d6d6d6",
  // borderBottom: {
  //   borderBottom: '1px solid ',
  //   '&:nth-last-child(1)': {
  //     borderBottom: 'none'
  //  }
  //  },
  padding: "0.5rem",
  // '&:not(:last-child)': {
  //   borderRight: '1px solid #d6d6d6',
  // },
})



const ItemPage = (props) => {
  const { state } = useLocation()
  const [item, setItem] = useState("")
  const [mainImage, setMainImage] = useState()

  console.log(state, `state<<<<`)

  useEffect(() => {
    try {
      axios
        .get(`/get-product/${state}`)
        // .get(`http://localhost:4000/get-product/${state}`)
        .then((response) => {
          console.log(response.data)
          setItem(response.data.data[0])
          setMainImage(response.data.data[0].images[0])
        })
      window.scrollTo(0, 0)
    } catch (error) {
      console.log(`err`, error)
    }
  }, [])

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    }
  }

  return (
    <>
      {item.length == 0 && <Box
        sx={{
          backgroundColor: "#fff",
          // backgroundColor: "blue",
          display: "flex",
          flexWrap: "wrap",
          marginBottom: "1rem",
          padding: "1rem",
          justifyContent: "center",
          width: "75%"
        }}
      ><CircularProgress /></Box>}
      {item && <Box sx={{ width: "75%" }}>


        <Box sx={{ backgroundColor: "#fff", padding: "1rem", marginTop: "1rem", height: "auto" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
            {/* HP Pavilion 15-ec2004AX (3E3R5PA) Laptop (AMD Hexa Core Ryzen 5/8
       GB/512 GB SSD/Windows 10/4 GB) */}
            {item && item.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ backgroundColor: "", padding: "1rem" }}>
              <Box
                component="img"
                sx={{
                  // maxHeight: { xs: 233, md: 167 },
                  // maxWidth: { xs: 350, md: 250 },
                  objectFit: "contain",
                  backgroundColor: "white",
                  // padding: "0.2rem",
                  maxWidth: "100%",
                  minWidth: "1rem",
                  height: "14rem"
                }}
                alt="The house from the offer."
                src={mainImage}
              />

              <Box
                sx={{
                  backgroundColor: "",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                }}
              >
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
                <Box sx={{ display: "flex" }}>
                  {item &&
                    item.images.map((item) => (
                      <Box
                        onClick={(e) => {
                          setMainImage(item)
                        }}
                        component="img"
                        sx={{
                          height: 33,
                          width: 35,
                          // maxHeight: { xs: 233, md: 167 },
                          // maxWidth: { xs: 350, md: 250 },
                          objectFit: "contain",
                          backgroundColor: "white",
                          padding: "0.3rem",
                          margin: "0.1rem",
                        }}
                        alt="The house from the offer."
                        src={item}
                      />
                    ))}
                </Box>
              </Box>
            </Box>
            <Box sx={{ backgroundColor: "", flex: "1", padding: "1rem" }}>
              <Box sx={{ display: "flex",flexWrap:"wrap",justifyContent:"space-between","padding": "1rem 0rem" }}>

                <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>Rs.{item && item.price} <Typography>(onwards)</Typography></Typography>
              <Link to={item?.affiliateLink?item?.affiliateLink:"https://www.amazon.in/Acer-SFX14-41G-Creator-Graphics-LPDDR4X/dp/B09G9JBTQX/ref=pd_lpo_3?pd_rd_w=lgbNc&content-id=amzn1.sym.6fa6e9ce-2890-49c2-bd25-c1096b5f4cf4&pf_rd_p=6fa6e9ce-2890-49c2-bd25-c1096b5f4cf4&pf_rd_r=28GQQ11A324KTZVDT73F&pd_rd_wg=mIzip&pd_rd_r=18588627-655a-42ba-b72e-549edf0aa9e3&pd_rd_i=B09G9JBTQX&psc=1"} style={{textDecoration: "none"}}>

              <Button  variant="contained" >Buy Now</Button>
              </Link>
              </Box>
              <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>key specs</Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>

                {/* <KeySpecMainBox> */}
                <KeySpecBox>
                  <Typography >Performance</Typography>

                  {item &&
                    Object.entries(item.performance).map(([key, val]) => {
                      return val && <ListItem>{val}</ListItem>
                    })}
                  {item &&
                    <ListItem>{item?.memory?.capacity}{item?.memory?.ramType}RAM</ListItem>
                  }

                </KeySpecBox>
                <KeySpecBox>
                  <Typography>Design</Typography>
                  {/* <ListItem>asd</ListItem> */}
                  {item &&
                    <ListItem>{item?.displayDetails?.displaySize}</ListItem>
                  }
                  {item &&
                    <ListItem>{item?.displayDetails?.displayResolution}</ListItem>
                  }
                  {item &&
                    <ListItem >{item?.generalInformation.dimensions}</ListItem>
                  }
                </KeySpecBox>
                <KeySpecBox>
                  <Typography>Storage</Typography>
                  {<ListItem>{item?.storage?.ssdCapacity}</ListItem>}
                </KeySpecBox>
                <KeySpecBox>
                  <Typography> Battery</Typography>
                  {item &&
                    Object.entries(item.battery).map(([key, val]) => {
                      return val && <ListItem>{val}</ListItem>
                    })}

                </KeySpecBox>
              </Box>
              
              <Box sx={{display:"flex",flexWrap:"wrap",justifyContent: "space-evenly",}}>


              {/* <KeySpecBox>asdqwe</KeySpecBox> */}
              <KeyHighlightBox>

               <LaptopIcon /> 
<Typography>{item?.generalInformation?.thickness}</Typography>
              </KeyHighlightBox>
              <KeyHighlightBox>

               <CameraAltIcon />
           <Typography>
               {item?.multimedia?.webcam.toLowerCase().includes("yes")?"Web Camera":""}
           </Typography>
              </KeyHighlightBox>
               
              <KeyHighlightBox>
               <BluetoothIcon />
              <Typography>
               {item?.networking?.bluetooth.toLowerCase().includes("yes")?"Bluetooth":""}
           </Typography>

              </KeyHighlightBox>
              <KeyHighlightBox>

               <WifiIcon  /> 
              <Typography>
               {item?.networking?.wirelessLAN.toLowerCase()?"Wifi":""}
           </Typography>

               {/* <Typography>Storage</Typography> */}
              </KeyHighlightBox>
              
              </Box>
            </Box>
          </Box>

        </Box>
        <Box sx={{ backgroundColor: "#fff", paddingTop: "1rem", marginTop: "1rem", height: "auto" }}>
          <Container >
            <TypographyStyle>General Information</TypographyStyle>

            {item?.generalInformation && <TableList list={item.generalInformation} />}

          </Container>
          <Container>
            <TypographyStyle>Display Details</TypographyStyle>

            {item?.displayDetails && <TableList list={item.displayDetails} />}

          </Container>
          <Container>
            <TypographyStyle>Performance</TypographyStyle>

            {item?.performance && <TableList list={item.performance} />}

          </Container>
          <Container>
            <TypographyStyle>Memory</TypographyStyle>

            {item?.memory && <TableList list={item.memory} />}

          </Container>
          <Container>
            <TypographyStyle>Storage</TypographyStyle>

            {item?.storage && <TableList list={item.storage} />}

          </Container>
          <Container>
            <TypographyStyle>Battery</TypographyStyle>

            {item?.battery && <TableList list={item.battery} />}

          </Container>
          <Container>
            <TypographyStyle>Networking</TypographyStyle>

            {item?.networking && <TableList list={item.networking} />}

          </Container>
          <Container>
            <TypographyStyle>Ports</TypographyStyle>

            {item?.ports && <TableList list={item.ports} />}

          </Container>
          <Container>
            <TypographyStyle>Multimedia</TypographyStyle>

            {item?.multimedia && <TableList list={item.multimedia} />}

          </Container>
          <Container>
            <TypographyStyle>Peripherals</TypographyStyle>

            {item?.peripherals && <TableList list={item.peripherals} />}

          </Container>
          <Container>
            <TypographyStyle>Others</TypographyStyle>

            {item?.others && <TableList list={item.others} />}

          </Container>

        </Box>
      </Box>}

    </>
  )
}

export default ItemPage
