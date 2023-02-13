import { Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'

const TableList = ({list}) => {
    

  return (
    <TableContainer>
    <Table>
      <TableBody>
      {Object.entries(list).map(([key, value]) =>{
        return(
            <TableRow key={key} >
          <TableCell >
            <Typography sx={{fontWeight: "bold"}}>{key}</Typography>
          </TableCell>
          <TableCell>
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