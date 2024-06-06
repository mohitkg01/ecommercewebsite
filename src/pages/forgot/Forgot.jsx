import React from 'react'
import { useState } from 'react';
import SideImage from '../login/SideImage';
const Forgot = () => {
  const [emailIn,setEmail]=useState("");
  const passwordHandlers=()=>{
    alert("Password succesfully reset");
  }
  return (
    <div className='main' id='forgot'>
    <div className="page">
    <SideImage/>
    <div className="input">
    <form action="">
            <div className='email'>
                <label htmlFor="" >Enter your email</label> <br />
              <input className='in' type="email" placeholder='Enter email here'  value={emailIn} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
    </form >
    <button onClick={passwordHandlers}>Reset Password</button>
    </div>
    </div>
    </div>
  
  )
}

export default Forgot