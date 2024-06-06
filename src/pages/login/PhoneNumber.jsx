import { signInWithPhoneNumber } from 'firebase/auth';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from './Firebase';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

// import { useNavigate } from 'react-router-dom';
// import img from '../../assets/img.jpg'
import Otppage from './Otppage';
import SideImage from './SideImage';

const PhoneNumber = () => {

    const [phonenumber, setPhonenumber] = useState('');
    const [user, setUser] = useState(null);
    const [showOtpPage, setShowOtpPage] = useState(false);

    const sendOtp = async (e) => {
        e.preventDefault();
        try {
            const reCaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, phonenumber, reCaptcha)

            setUser(confirmation);
            // console.log(confirmation);
            toast.success("OTP sent", {
                position: "top-center"
            })
            // navigate('/otppage')
            setShowOtpPage(true);
        }
        catch (err) {
            console.log(err);
            toast.error(err.message, {
                position: "bottom-center"
            })
        }
    }


    return (

        <div className='main' id='phonenumber'>
            {!showOtpPage ? (
                <div>
                    <div className="page">
                    <SideImage/>
          <div className="input">
                        <h1>Login using mobile no</h1>
                        <PhoneInput
                            country={'in'}
                            value={phonenumber}
                            onChange={(phonenumber) => setPhonenumber('+' + phonenumber)}
                        />
                        <button onClick={sendOtp} variant='contained'>send otp</button>
                        <div id="recaptcha"></div>
                        <br />
                    </div>
                </div>
                </div>
            ) : (
                <Otppage user={user} phone={phonenumber} />)}
        </div>
    )
}

export default PhoneNumber