import React, { useState } from 'react'
import '../../styles/Login.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import img from '../../assets/img.jpg';
import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
// import { login } from '../../store/userSlice';
import { toast } from 'react-toastify';
import SideImage from './SideImage';
import { login_user } from './reduxContainer/Action';

// console.log(login);
// console.log(useDispatch);
const schema = yup.object().shape({
  username: yup.string().default('emilys').required("corret your username to emilys"),
  password: yup.string().min(8).max(32).required("password must be at least 8 characters"),
});

const Login = () => {
  const [emailIn, setEmail] = useState("");
  const [passwordIn, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState('password');
  const navigate = useNavigate();
  const dispatch=useDispatch();
  



  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async () => {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30, // optional, defaults to 60
      })
    })
      .then(res => res.json())
    if (res.username === emailIn) {
      // const token = JSON.stringify(res.token);
      // dispatch(login({ token }));
      const token = res.token;
      const username = res.username;

      // Dispatch login action
      dispatch(login_user(token, username));

      localStorage.setItem("token", JSON.stringify(res.token));
      toast.success("Login Successful", {
        position: "top-center"
      })
    navigate("/home");

    }
    else {
      toast.error("Invalid Details", {
        position: "top-center"
      })
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
  const passwordVisible = () => {
    if (type === 'password') {
      setType('text');
      setShowPassword(true);
    }
    else {
      setShowPassword(false);
      setType('password');
    }
  }
  //handle forgot
  const handleForgot = () => {
    navigate("/forgot");
  }
  const handleLoginwithotp=()=>{
    navigate("/phonenumber");
  }
  return (
    <div className='main'>
      <div className="page">
        {/* <div className="img">
          <img src={img} alt="" />
        </div> */}
        <SideImage/>
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
            <h1>Lets Log in you in.</h1>

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
              <span className="otp" onClick={handleLoginwithotp} title='click to login with mobile no'>Otp Login</span>
              <button type="submit">Log in</button>
            </div>
          </form>
          {/* <div className='btn'>
    <span className="fg"onClick={handleForgot} title='click to reset your password'>Forgot password?</span>
    <button onClick={loginHandler}>Log In</button>
    </div> */}
    
          </div>
        </div>
      </div>
  )
}
export default Login;