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
import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
          <Search>
            <InputBase
              sx={{ width: "100%" }}
              placeholder="Search..."
            ></InputBase>
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
