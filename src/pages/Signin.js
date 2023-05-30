import { useNavigate, useLocation } from "react-router-dom";
import { useState,  useContext } from "react";

import useAuth from "../hooks/useAuth";
import axios from "axios";
//import { AuthContext } from "../Context/authProvider";

const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";
  //const { auth, setAuth } = useContext(AuthContext);
const { auth, setAuth } = useAuth();
//state the name of the employee gotten from the form
  const [name, setName] = useState("");
//state to store password of the employee gotten from the form
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const API = axios.create({
    baseURL: 'http://10.0.33.138:3001',
    withCredentials: true,
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch('http://10.0.33.138:3000/signin', {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify({
          name: name,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.name) {
            console.log(res);
            const role = res.role;
            const token = res.token;

              //storing employee information in our Auth state
            setAuth({ role, token, name });
            console.log(auth);
            setName("");
            setPassword("");
            //navigate our employee to the home page
            navigate(from, { replace: true });
          } else {
            console.log("incorrect submission");
          }
        });
    } catch (err) {
      if (!err?.response) {
        console.log("no server response");
      } else {
        console.log("registeration failed");
      }
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        //code for signin form.
        <p>{error}</p>
      <h1>SignIn</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input 
        type='text'
        id = 'username'
        onChange={(e) => setName(e.target.value)}
        required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
        type='text'
        id = 'password'
        onChange={(e) => setPassword(e.target.value)}
        required
        />
      </div>
      <button disabled = {!name && !password ? true : false}>Submit</button>
      </form>
    </div>
  );
};

export default Signin;