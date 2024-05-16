import React from 'react'
import img from '../assets/img.jpg';
import { useState } from 'react';
const Forgot = () => {
  const [emailIn,setEmail]=useState("");
  const passwordHandlers=()=>{
    alert("Password succesfully reset");
  }
  return (
    <div className='main' id='forgot'>
    <div className="page">
    <div className="img">
        <img src={img} alt="" />
    </div>
    <div className="input">
    <form action="">
            <div className='email'>
                <label htmlFor="" >Enter your email</label> <br />
                <input type="email" placeholder='Enter email here'  value={emailIn} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
    </form >
    <button onClick={passwordHandlers}>Reset Password</button>
    </div>
    </div>
    </div>
  
  )
}

export default Forgot