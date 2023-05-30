import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Register = () => {
//regex to make sure the employee's name is above 3 letters
  const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;

//to check if the employees password meets certain criterias
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{3,24}$/;

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/signin";
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);

  //state to store our password 
  const [password, setPassword] = useState("");
//state to store the outcome of our regex test
  const [validPass, setValidPass] = useState(false);
  const [matchPassword, setMatchPassword]  = useState('');
  const [checkMatch, setCheckMatch] = useState(false);
  
  const [error, setError] = useState('');

//state to store the employee's email
  const [email, setEmail] = useState("");
//state to store the employee's roles
  const [roles, setRoles] = useState("");

  let match;

//   const REGISTER_URL = '/register-employee;
const REGISTER_URL = '/admin';
  useEffect(() => {
//check if the employees name is valid
    setValidName(USER_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    // check if the password is valid
    setValidPass(PWD_REGEX.test(password));
  }, [password, matchPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validName && validPass) {
      try {
        fetch('http://10.0.33.138:3000${REGISTER_URL}', {
          method: "POST",
          headers: {"content-Type": "application/json"},
          body: JSON.stringify({
            // role: role,
            name: name,
            email: email,
            password: password,
          }),
        });

//once successfully registered the user is navigated to the sign-in page
        navigate(from, { replace: true });
        setName("");
        setEmail("");
        setPassword("");
      } catch (err) {
        if (!err?.response) {
          console.log("no server response");
        } else if (err?.response?.status === 409) {
          console.log("employee already exist");
        } else {
          console.log("registration failed");
        }
      }
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        //code for registration form
        <p>{error}</p>
        <h1>Register</h1>
            <div className= {
                    validName ? 'form-control' : 'form-control error'
                }>
            <label htmlFor='name'>Username</label>
            <input id='name'
                type = 'text'
                autoComplete='off'
                onChange={(e) => {setName(e.target.value)}}
                value = {name}
                required
                />
                <p>
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>
            </div>
            <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input id='email'
                type = 'email'
                autoComplete='off'
                onChange={(e) => {setEmail(e.target.value)}}
                value = {email}
                required
                />
            </div>
            <div className='form-control'>
                <label htmlFor='roles'>Roles</label>
                <div className='custom-select'>
                <select 
                onChange = {(e)=> setRoles(e.target.value)}>
                    {console.log(roles)}
                    <option value='SE'>Administrator</option>
                    <option value='Marketers'>Student</option>
                    <option value='HR'>Employee</option>
                </select>
                </div>
            </div>
            <div className= {
                    validPass ? 'form-control' : 'form-control error'
                }>
            <label htmlFor='password'>Password</label>
            <input id='password'
                type = 'text'
                autoComplete='off'
                onChange={(e) => {setPassword(e.target.value)}}
                value = {password}
                required
                />
                <p>
                     8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                </p>
                </div>
                <div className= {
                    checkMatch ? 'form-control' : 'form-control error'
                }>
            <label htmlFor='matchpassword'>Confirm Password</label>
            <input 
                type = 'text'
                autoComplete="off"
                onChange={(e) => setMatchPassword(e.target.value)}
                value = {matchPassword}
                required
                />
                <p>
                    Must match password
                </p>
                </div>
                <button disabled={!email || !validName || !validPass || !checkMatch ? true : false}>Submit</button>

                <p>Already registered <Link to="/Signin">Sign In</Link> </p>
                <span>
                </span>
                          
      </form>
    </div>
  );
};

export default Register;