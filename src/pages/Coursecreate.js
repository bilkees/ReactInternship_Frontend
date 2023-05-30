import { Button, ButtonBase,InputLabel,MenuItem,Select,Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import useForm from './useForm';

function Coursecreate() {
  var [course, setCourse] = useForm({"cName":"","cDesc":"", "cDuration":0, "cStartdate": "00-00-0000", "cPrice":0})
   ///var [course, setCourse] = useState([]);
   var[result,setResult]= useState({});
   //const [selectedValue, setSelectedValue] = useState('');
  //  const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };


  async function AddCourse (e) {
    e.preventDefault(); // if you use the form tag
  alert("course added")
    axios.post("http://10.0.33.138:3001/api/create",course)
    .then((response)=>{
      console.log(response.data);
      setResult(result=response.data)
      alert("course added")
    })
  }
  // const handleChanged = (event) => {
  //   course.cDesc= event.target.value;
  //   //console.log('Selected value:', newValue);
  //   console.log('Selected value:',  course.cDesc);
  //   //setSelectedValue(newValue);
  // };
   

  return (
    <div>
        
        
        <form>
       <div>
      
       <Typography variant='h4'>Add Course</Typography>
      <TextField name='cName' value={course.cName} onChange={setCourse} variant='outlined' label='Course name' fullWidth margin='normal'></TextField>
      {/* <TextField name='cDesc' value={course.cDesc} onChange={setCourse} variant='outlined' label='Course description' fullWidth margin='normal'></TextField> */}
      {/* <InputLabel id="demo-simple-select-label">Course Description</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={course.cDesc}
    label="Course Description"
    onChange={setCourse}
  >
    <MenuItem value={1}>Six-month Programs</MenuItem>
    <MenuItem value={2}>Microskill Programs</MenuItem>
    <MenuItem value={3}>Short-term Programs</MenuItem>
  </Select> */}
      <TextField name='cDuration' value={course.cDuration} onChange={setCourse} variant='outlined' label='Course duration ' fullWidth margin='normal'></TextField>
      <TextField name='cStartdate' value={course.cStartdate} onChange={setCourse} type='date' variant='outlined' label='Course start date' fullWidth margin='normal'></TextField>
      <TextField name='cPrice' value={course.cPrice} onChange={setCourse}  variant='outlined' label='price' fullWidth margin='normal'></TextField>
      {/* <label>
       Room type:
       <select>
           <option value="1">One</option>
           <option value="2">Two</option>
           <option value="3">Three</option>
       </select>
   </label> */}
   <label>
          Course Description:
          <select value={course.cDesc} name='cDesc' onChange={setCourse} >
            <option value="">Select an option</option>
            <option value="Six-month Programs">Six-month Programs</option>
            
            <option value="Microskill Programs">Microskill Programs</option>
            <option value="Short-term Programs">Short-term Programs</option>
          </select>
         
    <p>Selected value: {course.cDesc}</p>
        </label>
        
        <Button onClick={AddCourse} variant='outlined' color='primary' fullWidth >Add Course</Button>
       
       </div>
    </form>
        </div>
  )
}

export default Coursecreate