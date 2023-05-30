import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Box>
        <AppBar component={'nav'} >
            <Toolbar>
                <Typography 
                    variant='h5' 
                    component="div" 
                    sx={{flexGrow: 1 }} >ICT Website
                </Typography>
                <Box sx={{ display: {xs: "none", sm: "block"} }}>
                    <Button><Link to={'/'} style={{ textDecoration: 'none' }} >Home</Link></Button>  
                    <Button><Link to={'/about'} style={{ textDecoration: 'none'}}>About</Link></Button> 
                    <Button><Link to={'/courses'} style={{ textDecoration: 'none'}}>Courses</Link></Button> 
                    <Button><Link to={'/admin'} style={{ textDecoration: 'none'}}>Admin</Link></Button> 
                    {/* <Button><Link to={'/signin'} style={{ textDecoration: 'none'}}>Signin</Link></Button>
                    <Button><Link to={'/register'} style={{ textDecoration: 'none'}}>Register</Link></Button> */}
                    
                    
                </Box>
            </Toolbar> 
                
        </AppBar>
      </Box>
      
    </div>
  )
}

export default Header
