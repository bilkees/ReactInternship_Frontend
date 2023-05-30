import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import EditLocationIcon from '@mui/icons-material/EditLocation';
// import PHOTO_ICTAK-Reception from './'
 
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <div >
      
      {/* <footer className="footer">
      <Typography variant='h6' >
            All Rights Reserved &copy; ICT Academy
        </Typography>
    </footer>
       */}
       <div className='footer' >
      
      
        
       
      {/* <img src={PHOTO_ICTAK-Reception} alt='' /> */}
      
      

    <br></br>
       
       
   <EditLocationIcon/>
   <Link to ="https://www.google.com/maps/place/ICT+Academy+of+Kerala/@8.5565655,76.8819826,15z/data=!4m6!3m5!1s0x3b05befa954e2bb7:0x5a237b1a5fa40a39!8m2!3d8.5565655!4d76.8819826!16s%2Fg%2F11cn32lvq4" style={{ textDecoration: 'none' }} >GF-1 Thejaswini Building, Technopark Rd, Thiruvananthapuram, Kerala 695581</Link>
   <br></br>
   <Link to ="https://ictkerala.org/" style={{ textDecoration: 'none' }}>ICT Academy of Kerala</Link> is supported by Govt. of India , partnered by Govt. of Kerala and the IT industry.
   <br></br>
   Copyright © 2022 ICT Academy of Kerala.  All rights reserved.

   </div>
      
      </div>
   
  )
}

export default Footer
