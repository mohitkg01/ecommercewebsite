import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from './Firebase';
import { toast } from 'react-toastify';

const Loginfor = () => {
    const [email ,setEmail]=useState("");
    const [pass,setPass]=useState("");

    const handleSubmit= async (e)=>{
        // console.log(e);
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,pass);
            console.log("user logind succesfull");
            toast.success("user login  successfull!", {
                position: "top-center"
            })
        }
        catch(err){
            console.log(err.message);
            toast.success(err.message, {
                position: "bottom-center"
            })
        }
    }
  return (
    <div id='login'>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">login</label>
            <input type="email" onChange={e=>setEmail(e.target.value)} value={email}/>
            <label htmlFor="">password</label>
            <input type="text" onChange={e=>setPass(e.target.value)} value={pass}/>
            <button type='submit'>login</button>
        </form>

    </div> 
  )
}

export default Loginfor