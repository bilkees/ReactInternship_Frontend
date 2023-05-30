import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/singleCourse.css'

const IndividualCourse = () => {
  const location = useLocation();
 
  //const SingleObject= location.state&&location.state.SingleObject;
  const singleval = location.state;
  const data= singleval.singleCourse
 //console.log(SingleObject)
 console.log(singleval.singleCourse.cName);
 // console.log(props)
  
 
  return (
  <div>

{/* <div className='container' > */}
<div className='main' >
  
<div className='columnLeft'>

<p className='badge'> Starts On :{data.cStartdate}</p>
<h1>{data.cName}</h1>
<br></br>
<div>
<img src='https://drive.google.com/uc?id=1gTIAOJUYK5e9CAVdJGMv8UbCbMWbqXYV' height={300} width ={618}></img>
</div>
<p>{data.cDesc}</p>


<p> {data.cDuration}</p>

<p></p>
</div>
<div className='columnRight'>
 <div className='columnRightContainer'>
 <div className='fee-button'>
 <h3>{data.cPrice}</h3>
 </div>
 <div>
  <h3 className='pb-4'>This course includes </h3>
 </div>

 </div>

</div>
</div>
    </div>
  // </div>
  )
}

export default IndividualCourse