import { styled } from "@mui/material"
import { Box } from "@mui/system"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import Slider from "react-slick"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ItemPage from "./pages/ItemPage"
import ComparePage from "./pages/ComparePage"
import ItemsListPage from "./pages/ItemsListPage"

function App() {

  return (
    <Box sx={{
      backgroundColor: "#ececec",
      // backgroundColor:"black",
      height: "100%",
      // width: "100%",
    }}>



      
      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
         alignItems: 'center',
        // minHeight:'100vh'
      }}>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/itemPage/:id" element={<ItemPage />} />
            <Route path="/comparePage" element={<ComparePage />} />
            <Route path="/itemsPage" element={<ItemsListPage />} />
            <Route path="/itemsPage/get-products" element={<ItemsListPage />} />
            <Route path="/itemsPage/search-product" element={<ItemsListPage />} />
          </Routes>
        </Router>
        {/* <HomePage/> */}
        <Footer />
      </Box>

    </Box>
  )
}

export default App
