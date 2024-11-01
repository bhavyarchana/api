import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Task = () => {
    var[name,setname]=useState([])
   axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        setname(response.data)
        console.log(name)
    })
  return (
    <div>
        <br /><br /><br />
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>TITTLE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {name.map((val)=>{
                        return ( 
                        <TableRow>
                        <TableCell>{val.id}</TableCell>
                        <TableCell>{val.title}</TableCell>
                        </TableRow>
                    )
                    }
                    )}
                <TableRow>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Task