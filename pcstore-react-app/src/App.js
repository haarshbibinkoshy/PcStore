import {styled} from "@mui/material"
import { Box } from "@mui/system";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Box sx={{backgroundColor:"#ececec",height:"100%"}}>

    

    <Navbar/>
    <Box sx={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
      <HomePage/>
      <Footer/>
    </Box>
    </Box>
  );
}

export default App;
