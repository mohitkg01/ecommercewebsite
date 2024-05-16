import React, { useState } from 'react'
import '../styles/Login.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import img from '../assets/img.jpg';
import {useNavigate} from "react-router-dom";


const Login = () => {
    const [emailIn,setEmail]=useState("");
    const [passwordIn,setPassword]=useState("");
    const [showPassword,setShowPassword]=useState(false);
    const [type,setType]=useState('password');
    const navigate = useNavigate();
  
//getting data 
const em=localStorage.getItem("email");
const email=JSON.parse(em);
const pa=localStorage.getItem("pass");
const pass=JSON.parse(pa);

//login hadler
   const loginHandler=()=>{
    if(!email  && !pass){
        navigate("/home")
        localStorage.setItem("email",JSON.stringify(emailIn));
        localStorage.setItem("pass",JSON.stringify(passwordIn));
    }
    else if(emailIn===email && passwordIn===pass){
        //   alert("Log in succesfull")
          navigate("/home")
          localStorage.setItem("email",JSON.stringify(emailIn));
          localStorage.setItem("pass",JSON.stringify(passwordIn));
    }
    else{
        alert("Invalid id and password")
    }
   } 

// password visibility
   const passwordVisible=()=>{
    if(type==='password'){
     setType('text');
     setShowPassword(true);}
     else{
        setShowPassword(false);
        setType('password');
     }
   }
//handle forgot
const handleForgot=()=>{
    navigate("/forgot");
}

  return (
    <div className='main'>
    <div className="page">
    <div className="img">
        <img src={img} alt="" />
    </div>
    <div className="input">
    <form action="">
            <div className='email'>
                <label htmlFor="" >Enter your email id </label> <br />
                <input type="email" placeholder='Ex:mohit@gmail.com'  value={emailIn} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className='password'>
                <label htmlFor="">Enter your password</label> <br />
                <input type={type} placeholder='****************' value={passwordIn} onChange={(e)=> setPassword(e.target.value)}  />
                <span  onClick={passwordVisible}>{showPassword ? <FaEyeSlash /> : <FaEye />}  </span>
            </div> 
    </form >
    <div className='btn'>
    <span className="fg"onClick={handleForgot} title='click to reset your password'>Forgot password?</span>
    <button onClick={loginHandler}>Log In</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Login