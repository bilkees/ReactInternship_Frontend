import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses, } from '@mui/material'
import { useLocation } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
//import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import '../styles/Course_View.css'
import CourseList from './CourseList';
import { useNavigate } from 'react-router-dom';
import CourseDescription from './CourseDescription';


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


const Course_View = () => {
    var[course,setCourse]=useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    //const [showDetails, setShowDetails] = useState(false);
    useEffect(()=>{
        
        axios.get("http://10.0.33.138:3001/api/view")
        .then((response)=>{
            //console.log(response.data);
            setCourse(course=response.data);
        })
        // fetchCourse()
      },[])
      //console.log(location.pathname);
     
      const onchangeHandler=(id)=>{
        alert("change Handler")
        
        const data={"_id":id} 
        
        axios.post("http://10.0.33.138:3001/api/singleview",data)
        .then((response)=>{
            //console.log(response.data);
            alert("Single course selected");
            setSelectedCourse(selectedCourse=response.data)
            //fetchCourse();
            //alert("fetchcourse");
        })
    
    }
   
  return (
    <div className='courseviewMain'>
       <div>
      
       <CourseDescription/>
     
       </div>
    </div>
  )
}

export default Course_View