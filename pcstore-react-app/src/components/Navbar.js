import {
  AppBar,
  Box,
  Button,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { height, width } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
// import { red } from '@mui/material/colors'
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  height: "10px",
  // width: '100vw',
  // width: '100vw',
  padding: "0px",
  // border:'1px solid black',
  // backgroundColor:'red'
  backgroundColor: "#1976d2",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%",
}));

const Navbar = () => {

  const [search, setSearch] = useState('');
  const navigate = useNavigate()

  function handleSearchValue(e) {
    e.preventDefault();
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  function handleSearch(e) {
    e.preventDefault();
  //  console.log(`target>>>`,search);
   navigate(`/itemsPage/search-product?searchBy=name&value=${search}`,{state:""})
  //  try {
  //   axios.get('http://localhost:4000/get-products?filterBy=category&filterValue=Gaming laptop&order=-1&page=1&limit=10').then((response) => {
  //     // console.log(response.data);
  //     setItems(response.data.data);
  //   });
    
  // } catch (error) {
  //   console.log(`err`,error);
  // }
  
  }
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="sticky"
        sx={{
          height: "65px",
          backgroundColor: "#1976d2",
          display: "flex",
          width: "100%",
        }}
      >
        <SyledToolbar>
          <Box sx={{ backgroundColor: "green" }}>
          <Link to="/" style={{ textDecoration: "none",color:"#fff" }}>

            <Typography variant="h6">logo</Typography>
          </Link>
          </Box>
          <Search sx={{display: "flex",}}>
            <InputBase
              sx={{ width: "100%" }}
              placeholder="Search..."
              onChange={handleSearchValue}
              // onSubmit={handleSearch}
            ></InputBase>
            <Link to={`/itemsPage/search-product?searchBy=name&value=${search}`}  style={{ textDecoration: "none",color:"#fff" }}>

            <Button 
            // onClick={handleSearch}
            // href={`/itemsPage/search-product?searchBy=name&value=${search}`}
            >search</Button>
            </Link>
            {/* <SearchIcon sx={{color:'black'}}/> */}
          </Search>
          <Box sx={{}}>
            <Link to="/comparePage" style={{ textDecoration: "none" }}>
              {/* <Typography></Typography> */}
              <Button sx={{color:'white'}}>Compare Products</Button>
            </Link>
          </Box>
        </SyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
