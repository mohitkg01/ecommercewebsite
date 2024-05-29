import React, { useState } from 'react'
import '../../styles/Login.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import img from '../../assets/img.jpg';
import {useNavigate} from "react-router-dom";
// import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().default('emilys').required("corret your username to emilys"),
  password: yup.string().min(8).max(32).required("password must be at least 8 characters"),
});

const Login = () => {
    const [emailIn,setEmail]=useState("");
    const [passwordIn,setPassword]=useState("");
    const [showPassword,setShowPassword]=useState(false);
    const [type,setType]=useState('password');
    const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
//getting data 
// const em=localStorage.getItem("email");
// const email=JSON.parse(em);
// const pa=localStorage.getItem("pass");
// const pass=JSON.parse(pa);
// const tokenraw=localStorage.getItem("tk");
// // const lstoken=JSON.parse(tokenraw);
// console.log(tokenraw);


//loginhandler 
// const loginHandler=async ()=>{
//     const res= await axios.post('https://dummyjson.com/auth/login'
//     , {
//         username: 'kminchelle',
//         password: '0lelplR',    
//       }
//     );

//     if(res.data.username===emailIn  ){
//         localStorage.setItem("tk",JSON.stringify(res.data.token));
//         // navigate('/home')
//     }
//     else{
//         
//     }
// }
//invalid handler
  const invalid = () => toast.error('Invalid Credientials');
//login success
const success=()=>{
  console.log("Success function called");
  toast.success("Login succesful")
};

  const onSubmitHandler =async ()=>{
    const res= await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: 'emilys',
          password: 'emilyspass',
          expiresInMins: 30, // optional, defaults to 60
        })
      })
      .then(res => res.json())

      if(res.username===emailIn){
       localStorage.setItem("token",JSON.stringify(res.token));
       success();
        navigate("/home");
      
      }
      else{
        // alert("Invalid id and password");
        invalid();
      }
}


//login hadler
//    const loginHandler=()=>{
//     if(!email  && !pass){
//         navigate("/home")
//         localStorage.setItem("email",JSON.stringify(emailIn));
//         localStorage.setItem("pass",JSON.stringify(passwordIn));
//     }
//     else if(emailIn===email && passwordIn===pass){
//         //   alert("Log in succesfull")
//           navigate("/home")
//           localStorage.setItem("email",JSON.stringify(emailIn));
//           localStorage.setItem("pass",JSON.stringify(passwordIn));
//     }
//     else{
//         alert("Invalid id and password")
//     }
//    } 

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
    {/* <form action="">
            <div className='email'>
                <label htmlFor="" >Enter your email id </label> <br />
                <input class='in' type="text" placeholder='Ex:mohit@gmail.com'  value={emailIn} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className='password'>
                <label htmlFor="">Enter your password</label> <br />
                <input className='in' type={type} placeholder='****************' value={passwordIn} onChange={(e)=> setPassword(e.target.value)}  />
                <span className='pass' onClick={passwordVisible}>{showPassword ? <FaEyeSlash /> : <FaEye />}  </span>
            </div> 
    </form > */}
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <h2>Lets Log in you in.</h2>
            <br />
            <div className='email'>
              <label htmlFor="" >Enter your email id </label><br />
              <input className='in' {...register("username")} placeholder="Username" type="text" value={emailIn} onChange={(e) => setEmail(e.target.value)} required />
            <p>{errors.username?.message}</p>
            </div>
            <div className='password'>
              <label htmlFor="">Enter your password</label><br />
              <input className='in'
              {...register("password")}
              placeholder="password"
                value={passwordIn}
                type={type} onChange={(e) => setPassword(e.target.value)}
              required
            />
              <span className='pass' onClick={passwordVisible}>{showPassword ? <FaEyeSlash /> : <FaEye />}  </span>
            <p>{errors.password?.message}</p>
            </div>
            <div className='btn'>
              <span className="fg" onClick={handleForgot} title='click to reset your password'>Forgot password?</span>
            <button type="submit">Log in</button>
            </div>
          </form>
    {/* <div className='btn'>
    <span className="fg"onClick={handleForgot} title='click to reset your password'>Forgot password?</span>
    <button onClick={loginHandler}>Log In</button>
    </div> */}
    </div>
    </div>
      <Toaster /> 
    </div>
  )
}
export default Login;