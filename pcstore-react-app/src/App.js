import {styled} from "@mui/material"
import { Box } from "@mui/system";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Slider from "react-slick";

function App() {

  return (
    <Box sx={{
      backgroundColor:"#ececec",
      // backgroundColor:"black",
      height:"100%"}}>

    

    <Navbar/>
    <Box sx={{display:'flex', flexDirection: 'column', justifyContent:'space-between', alignItems: 'center',
    // minHeight:'100vh'
    }}>
      <HomePage/>
      <Footer/>
    </Box>

    </Box>
  );
}

export default App;
