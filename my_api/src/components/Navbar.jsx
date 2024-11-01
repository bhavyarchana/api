import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        
<AppBar sx={{
    background: 'gb(108,68,150)',
    background: 'linear-gradient(0deg, rgba(108,68,150,1) 0%, rgba(110,105,255,1) 100%)'
    }}>
    <Toolbar>
        <Typography variant='h6'  component="div" sx={{ flexGrow: 1 }}>my_APP </Typography>
        <Button color='info'>App_user</Button>
        <Button color='info'>App_task</Button>
    </Toolbar>
</AppBar>
    </div>
  )
}

export default Navbar

