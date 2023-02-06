import {styled} from "@mui/material"
import { Box } from "@mui/system";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Slider from "react-slick";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ItemPage from "./pages/ItemPage";

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
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/itemPage/:id" element={<ItemPage/>}/>
        {/* <Route path="home" component={HomePage}/> */}
      </Routes>
    </Router>
      {/* <HomePage/> */}
      <Footer/>
    </Box>

    </Box>
  );
}

export default App;
