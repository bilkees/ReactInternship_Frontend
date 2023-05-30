import React, { useState } from 'react'

const useForm = (props) => {          //given props instead of book
    var[val,setval]=useState(props);
  return[val,(event)=>{
    setval({...val,[event.target.name]:event.target.value})
  }]
}

export default useForm