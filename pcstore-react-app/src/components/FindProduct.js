import { Button, ButtonGroup, Slider, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const FindProduct = () => {
    // const [state, setState] = useState(0)
    const [value, setValue] = React.useState([20000, 55000]);
    const buttons = [
        <Button sx={{textTransform:'none'}} key="one">Hp</Button>,
        <Button sx={{textTransform:'none'}} key="two">Dell</Button>,
        <Button sx={{textTransform:'none'}} key="three">Apple</Button>,
        <Button sx={{textTransform:'none'}} key="four">Lenovo</Button>,
        <Button sx={{textTransform:'none'}} key="five">Acer</Button>,
        
      ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate()
  function handleClick(e) {
    console.log(e.target.value);
    navigate(`/itemsPage/search-product?searchBy=brand&value=${e.target.value}`,{state:""})
  }
  return (
    <Box sx={{}}>
    <Box sx={{width:"100%",display: "flex",alignItems:"center",justifyContent:"center", }}>

        <Typography sx={{paddingTop:"1rem"}} variant='h5'>Lets Find a Product For You!</Typography>
    </Box>
    <Box sx={{display:'flex',width:'100%',justifyContent:'center',gap:'4rem' ,padding:'2rem 0' ,backgroundColor:"#ffff"}}>
        <Box sx={{width:'30%', display:'flex',flexDirection:'column'}}>
            <Typography variant='subtitle1'>By Price</Typography>
            <Slider
            min={5}
            max={350000}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
      />
            <TextField value={value[0]} onChange={(e)=>{e.preventDefault();setValue([e.target.value,value[1]])}} id="outlined-basic" label="From" variant="outlined" />
            <TextField value={value[1]} onChange={(e)=>{e.preventDefault();setValue([value[0],e.target.value])}} id="outlined-basic" label="To" variant="outlined" />
            <Link to={`/itemsPage/get-products?filterBy=price&filterValue=${value[0]}|${value[1]}&order=1`}  style={{ textDecoration: "none",color:"#fff" }} >
            {/* <Link to={`/itemsPage/get-products?filterBy=price&filterValue=${value[0]}|${value[1]}&order=1&page=1&limit=3`}  style={{ textDecoration: "none",color:"#fff" }} > */}
            <Button variant='contained' sx={{width:'100%',textDecoration:"none"}}>
              
            find
            </Button>
            </Link>
        </Box>
        <Box>
            <Typography variant='subtitle1'>By Brand</Typography>
            
            <Box
      sx={{
        display: 'flex',
        // '& > *': {
        //   m: 1,
        // },
      }}
    >
      
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {/* {buttons} */}
        <Button onClick={handleClick} value="Hp" sx={{textTransform:'none'}}   key="one">Hp</Button>
        <Button onClick={handleClick} value="Dell" sx={{textTransform:'none'}} key="two">Dell</Button>
        <Button onClick={handleClick} value="Apple" sx={{textTransform:'none'}} key="three">Apple</Button>
        <Button onClick={handleClick} value="Lenovo" sx={{textTransform:'none'}} key="four">Lenovo</Button>
        <Button onClick={handleClick} value="Acer" sx={{textTransform:'none'}} key="five">Acer</Button>
      </ButtonGroup>
    </Box>
        </Box>
    </Box>

    </Box>
  )
}

export default FindProduct