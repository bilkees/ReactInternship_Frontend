 import { Button, TextField, Typography } from '@mui/material'
 import '../styles/Admin.css'



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your login logic here using the email and password values
    if(email.length > 0 && password.length > 0)
    {
      console.log('Login submitted:', email, password);
      navigate('/dashboard');
    }
    else{
      alert("pls enter valid details")
      console.log('pls enter valid details');
    }
   
   
  };

  return (
    <div className='adminPage'>
      <br></br>
      <br></br>
      
      
      <form onSubmit={handleSubmit} >
        <div>
        
        <div>
        <TextField label="Email"
      variant='outlined'
      
      value={email}
      type="email"
      id='email'
      onChange={handleEmailChange}
      >
        </TextField>
        </div>
        <br></br>
        <div>
        <TextField label="Password"
      variant='outlined'
      
      value={password}
      type="password"
      id='password'
      onChange={handlePasswordChange}
      >
        </TextField>
        </div>
<br/>
        <div id='btn'>
        <Button variant='contained' type='submit'>Login</Button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default Admin;
