import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses, } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import '../styles/CourseDescription.css'
import { useNavigate } from 'react-router-dom';
import '../styles/Course_View.css'
import IndividualCourse from './IndividualCourse';
import {  Link, Routes, Route } from "react-router-dom";
import Results from './Results';



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


const CourseDescription = () => {
    var[course,setCourse]=useState([]);
   const [distinctValues, setDistinctValues] = useState([]);
   const[courseDesc,setCourseDesc]=useState([]);
   const [singleObject, setSingleObject] = useState({"cName":"","cDesc":"", "cDuration":'', "cStartdate": "", "cPrice":''});
   var[courseSelected,setCourseSelected]=useState(false);
   const [isVisible, setIsVisible] = useState(false);
   var single;
   const navigate = useNavigate();
 
        useEffect(()=>{
        
        axios.get("http://10.0.33.138:3001/api/view")
        .then((response)=>{
            //console.log(response.data);
            let course=response.data;
             setCourse(course);
          
            
        })
        .catch(error => console.log(error));
       
      },[])
      useEffect(()=>{
        const uniqueValues = [...new Set(course.map((item) => item.cDesc))];
        setDistinctValues(uniqueValues);
      },[course])

    
      //onclick of each course description

      const termwise=(desc)=>{
        setIsVisible(false)
    //alert(desc)
    const data={"cDesc":desc} 
    axios.post("http://10.0.33.138:3001/api/description",data)
    .then((response)=>{
       // console.log(response.data);
     
        setCourseDesc(response.data)
        //alert("Successfully fetched courses");
        setCourseSelected(true)
    })

      } 
      
// single course
      const handleRowClick=(id)=>{
        //alert(id)
        
        const data={"_id":id} 
       
                  axios.post("http://10.0.33.138:3001/api/singleview",data)
                  .then((response)=>{
                      //console.log(response.data);
                      let singleCourse= response.data;
                      setSingleObject(singleCourse);
                     
                     //console.log(singleCourse)
                    // console.log(singleObject)
                    navigate('/individualcourse', {state:{ singleCourse}})
                      
                     // setIsVisible(true)
                    })

      }


       return (
        <div className='main' >
    <div className="first-section">
            
     <div className="card-container-right">
   
     {distinctValues.map((value,index) =>{ 
            
            return(
              
            <div key={index} className="card">
                <Button onClick={()=>termwise(value)} variant='outlined' color='primary' fullWidth >{value}</Button>
               
            </div>
         )
          }
        )
          }
        </div> 
      


{/* <div className='card-table'> */}
<div className="card-container-left row container overflow-hidden gx-5">
            {courseDesc.map((value,index) =>{ 
                      
                        
                      return(

         
        
        <a>
          <div className='col' style={{border:"1px solid"}} onClick={()=>handleRowClick(value._id)} >
          
          <div className='minibox class="p-3"'>
               <img style={{width:"150px",height:"100px"}} src='https://drive.google.com/uc?id=1CHeMfMldcocpRW1uaEa9nwpuhxnDZZD7' alt={courseDesc.cName}></img>
              <p style={{color:"white"}}>{value.cName}</p>
             
              </div>
          
            
              
              
          </div>
         </a>
          
           
          // </div>
                        )
                      }
                )
                      } 
    </div>
</div>
{/* <Switch>
   <Route 
   path="/productdetails" 
   render={() => (
   { <IndividualCourse  product={courseDesc}/>})}/>
   />
  </Switch> */}

  {/* <IndividualCourse product={singleObject}/> */}

  {/* className="first-section" ends */}
{/* second section starts */}
<div className='second-section'>

</div>
 {isVisible&&(
  <div>
    {/* <Link to={{ pathname: '/individualcourse',
    //  state: {singleObject}
}}></Link> */}



    
<Link  to={{ pathname: '/individualcourse', state:{ singleObject}} }  >
  Next Step
</Link>

     {/* <IndividualCourse  product={ singleObject}/>; */}
    </div>
 )}

   
 </div>
  )
}

export default CourseDescription