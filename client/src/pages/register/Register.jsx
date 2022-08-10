import './register.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../config';

 export default function Register(){
  const [username, setUsername]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [ error, setError] = useState(false);

  const handleSubmit = async(e)=> {
    e.preventDefault();
    setError(false);
    try{
    const res = await axiosInstance.post("/auth/register",{
      username,
      email,
      password,
    });
    res.data && window.location.replace("/login");
  }catch(err) {
    setError(true);
  }
};
  return (
    <div className='register'>
            <span className='registerTitle'>Register</span>
        <form className='registerForm' onSubmit={handleSubmit}>
        <label>Username</label>
            <input 
            type="text" 
            placeholder="Enter your username..." 
            className='registerInput' 
            onChange={(e) => setUsername(e.target.value)}>
            </input>
            <label>Email</label>
            <input type="text" 
            placeholder="Enter your email..." 
            className='registerInput'
            onChange={(e)=>setEmail(e.target.value)}>
            </input>
            <label>Password</label>
            <input type="password" 
            placeholder="Enter your password.." 
            className='registerInput'
            onChange={(e)=>setPassword(e.target.value)}>
            </input>
            <button className="registerButton" type="submit">
              Register
            </button>
        </form>
            <button className="registerLoginButton">
              <Link className="link" to="/login">
                Login
              </Link>
            </button>
      {error && <span style={{color:"red",marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}

