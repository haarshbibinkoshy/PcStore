import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

const TableList = ({list}) => {
    

  return (
    <TableContainer>
    <Table>
      <TableBody>
      {Object.entries(list).map(([key, value]) =>{
        return value&&(
            <TableRow key={key} >
            
          <TableCell align="left" sx={{width:"20rem"}} >

            <Typography sx={{fontWeight: ""}}>{key}</Typography>
            {/* key */}
          </TableCell>
          <TableCell align="left">
            {value}
          </TableCell>
        </TableRow>
        )
      })}
        {/* <TableRow >
          <TableCell >
            <Typography sx={{fontWeight: "bold"}}>key</Typography>
          </TableCell>
          <TableCell>
            value
          </TableCell>
        </TableRow> */}
        
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default TableList