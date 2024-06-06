import React, { useState } from 'react'
import { toast } from 'react-toastify'; 
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SideImage from './SideImage';
import { useDispatch } from 'react-redux';
import { login_user } from './reduxContainer/Action';
// import { login } from '../../store/userSlice';
const Otppage = ({user,phone}) => {
    // console.log(user);
    const [otp, setOtp] = useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
   
    const verifyOtp = async (e) => {
        e.preventDefault();
        try {
            const data = await user.confirm(otp)
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                    username: 'emilys',
                    password: 'emilyspass',
                    expiresInMins: 30, // optional, defaults to 60
                })
            })
            const res = await response.json();
            if (user.confirm(otp)) {
                console.log(phone);
                const token = res.token;
                const username = phone;

                // Dispatch login action
                dispatch(login_user(token, username));

                localStorage.setItem("token", JSON.stringify(res.token));
                toast.success("Login Successful", {
                    position: "top-center"
                })
                navigate("/home")

                //   }
            }
            console.log(data);
            toast.success("user login  successfull!", {
                position: "top-center"
            })
        }
        catch (err) {
            console.log(err);
            if (err.code === 'auth/code-expired') {
                toast.error("The OTP code has expired. Please request a new one.", {
                    position: "bottom-center",
                });
            } else {
                toast.error(err.message, {
                    position: "bottom-center",
                });
            }
        }

    }
  return (
    <div id='otppage' className='main'>
        <div className="page">
            <SideImage/>
            <div className="input">
          <TextField onChange={e => setOtp(e.target.value)} label='Enter otp' />
          <br />
          <button onClick={verifyOtp} variant='contained' style={{ width: '10rem' }}>Verify</button>
    </div>
      </div>
</div>
  )
}

export default Otppage