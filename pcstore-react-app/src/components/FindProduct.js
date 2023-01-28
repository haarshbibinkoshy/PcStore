import { Button, ButtonGroup, Slider, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const FindProduct = () => {
    const [state, setState] = useState(0)
    const [value, setValue] = React.useState([20000, 55000]);
    const buttons = [
        <Button sx={{textTransform:'none'}} key="one">Hp</Button>,
        <Button sx={{textTransform:'none'}} key="one">Dell</Button>,
        <Button sx={{textTransform:'none'}} key="one">Apple</Button>,
        <Button sx={{textTransform:'none'}} key="one">Lenovo</Button>,
        <Button sx={{textTransform:'none'}} key="one">Acer</Button>,
        
      ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
            <Button variant='contained'>find</Button>
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
        {buttons}
      </ButtonGroup>
    </Box>
        </Box>
    </Box>

    </Box>
  )
}

export default FindProduct