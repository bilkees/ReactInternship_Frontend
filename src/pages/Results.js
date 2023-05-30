import React from 'react'

const Results = () => {
  const data={name:"jhon",age:20,email:"jhon@gmail.com"}

  return (
    <div><p>{data.email}</p>
    <p>{data.age}</p>
    </div>
  )
}

export default Results