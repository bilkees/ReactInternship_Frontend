import { Button, TextField, Typography, useScrollTrigger } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'

const Update = (props) => {
// console.log(props)
const [data, setData] = useState({
    cName: props.value.cName,
    cDesc:props.value.cDesc,
    cDuration:props.value.cDuration,
    cStartdate:props.value.cStartdate,
    cPrice:props.value.cPrice,
   
})
const inputHandler = (e) => {
  const {name,value} = e.target
  setData((previousState) => ({
    ...previousState,
    [name]:value
  }))
}
const readValues =() =>{
  var postdata = {...data,_id : props.value._id}
  axios.post("http://10.0.33.138:3001/api/update",postdata)
  .then((response) => {
    console.log("post data" + response.data)
    alert("success")
    window.location.reload()
  })
}
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
      <Typography variant='h4'>Update Course</Typography>
      <TextField label="Course name"
      variant='outlined'
      onChange={inputHandler}
      value={data.cName}
      name='cName'>
        </TextField>
        <Box><TextField label="Course Description"
      variant='outlined'
      onChange={inputHandler}
      value={data.cDesc}
      name='cDesc'>
        </TextField></Box>
        <Box><TextField label="Course Duration"
      variant='outlined'
      onChange={inputHandler}
      value={data.cDuration}
      name='cDesc'>
        </TextField></Box>
        <Box><TextField label="Course Starting Date"
      variant='outlined'
      onChange={inputHandler}
      value={data.cStartdate}
      name='cDesc'>
        </TextField></Box>
        <Box><TextField label="Course Price"
      variant='outlined'
      onChange={inputHandler}
      value={data.cPrice}
      name='cDesc'>
        </TextField></Box>
        <Box>
          <Button variant='contained'
          onClick={readValues}>
            Update Course
          </Button>
        </Box>
    </div>
  )
  
}

export default Update