
			
              import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material'
              import axios from 'axios';
              import React, { useEffect } from 'react'
              import { useState } from 'react';
import { Link } from 'react-router-dom';
import Update from './Update';
              
              
              const StyledTableCell = styled(TableCell)(({ theme }) => ({
                  [`&.${tableCellClasses.head}`]: {
                    backgroundColor: theme.palette.common.black,
                    color: theme.palette.common.white,
                  },
                  [`&.${tableCellClasses.body}`]: {
                    fontSize: 14,
                  },
                }));
                
                const StyledTableRow = styled(TableRow)(({ theme }) => ({
                  '&:nth-of-type(odd)': {
                    backgroundColor: theme.palette.action.hover,
                  },
                  // hide last border
                  '&:last-child td, &:last-child th': {
                    border: 0,
                  },
                }));
              
              
              
              const AdminPage = () => {
              
              
                  var[course,setCourse]=useState([]);
                  var[updateState,setupdateState]=useState(false);
                  
                  
                  var[dataState,setDataState]=useState({})
                    var finalJSX
                  useEffect(()=>{
                      // axios.get("http://10.0.33.138:3001/api/view")
                      // .then((response)=>{
                      //     console.log(response.data);
                      //     setCourse(course=response.data);
                      // })
                       fetchCourse()
                    },[])
                
                const fetchCourse=()=>{
                    axios.get("http://10.0.33.138:3001/api/view")
                    .then((response)=>{
                        console.log(response.data);
                        setCourse(course=response.data);
                    })
                }
                //delete course

                const deleteCourse=(id)=>{
                 
                  const data={"_id":id} 
                  axios.post("http://10.0.33.138:3001/api/delete",data)
                  .then((response)=>{
                      console.log(response.data);
                      alert("Successfully deleted");
                      fetchCourse();
                      
                  })
              
              }
               
              const updateCourse=((value)=>{
                //alert("update clicked")
                console.log(value)
                    
                setupdateState(true);
                setDataState(value);
                 
                  console.log(dataState);
                 
              })
              
               if(updateState){
               // alert(updateState)
                finalJSX=<Update value={dataState}/>
                }
                else{
                    finalJSX=
              
                    <div>
                    <br></br>
                    <br></br>
                    <br></br>
                   <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <StyledTableRow>
                        <StyledTableCell>Course Name</StyledTableCell>
                        <StyledTableCell align="right">Course Description</StyledTableCell>
                        <StyledTableCell align="right">Course Duration</StyledTableCell>
                        <StyledTableCell align="right">Course Start Date</StyledTableCell>
                        <StyledTableCell align="right">Course Price</StyledTableCell>
                        <StyledTableCell align="right">Delete</StyledTableCell>
                        <StyledTableCell align="right">Update</StyledTableCell>
                      </StyledTableRow>
                    </TableHead>
                    <TableBody>
                      {course.map((value,index) => (
                        
                        <StyledTableRow
                          key={index}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <StyledTableCell component="th" scope="row"> {value.cName}</StyledTableCell>
                          <StyledTableCell align="right">{value.cDesc}</StyledTableCell>
                          <StyledTableCell align="right">{value.cDuration}</StyledTableCell>
                          <StyledTableCell align="right">{value.cStartdate}</StyledTableCell>
                          <StyledTableCell align="right">{value.cPrice}</StyledTableCell>
                           <StyledTableCell align="right"><Button onClick={()=>deleteCourse(value._id)} variant='contained' color='error'>Delete </Button></StyledTableCell>
                          <StyledTableCell align="right"><Button onClick={()=>updateCourse(value)} variant='contained'>Update </Button></StyledTableCell> 
                        </StyledTableRow>
                        )
            )
                      }   
                    </TableBody>
                  </Table>
                </TableContainer>
                <br></br>
                <div>
                <Link to="/create"><Button variant='contained'>Add New Course</Button></Link>
                </div>
                {/* <Link to="/company"><button>Know More</button></Link> */}
                </div>
              
                return (
                  finalJSX
                )
              }
            }
              
           export default AdminPage