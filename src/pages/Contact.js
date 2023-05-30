import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
//import Courseview from './CourseView';

const Contact = () => {
  return (
    <div style={{backgroundColor: 'aqua'}}>
      <Box sx={{ py: 10, pl: 10}} >
        <Typography variant='h5' >Contact ICT</Typography>
        
        <Link to="/about">About</Link>
        <br></br>
        <Typography> GF-1 Thejaswini Building,<br /> Technopark Rd,<br /> Thiruvananthapuram,<br /> Kerala 695581</Typography>
        <br></br>
        <Typography>ICT Academy of Kerala is supported by Govt. of India ,<br /> partnered by Govt. of Kerala and the IT industry.</Typography>
        <TableContainer sx={{m: 3}} component={Paper} >
          <Table arial-aria-label='contact table' >
            <TableHead>
              <TableRow>
                <TableCell >Contact</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><SupportAgentIcon sx={{color: 'red', pr: 2}} />124567890 (toll free)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><EmailIcon sx={{color: 'blue', pr: 2}} />help@ict.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
        
    </div>
  )
}

export default Contact
