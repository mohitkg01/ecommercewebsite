import React, { useState } from 'react'
import '../../styles/Login.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import SideImage from '../../layout/SideImage';
import { login_user } from '../../reduxContainer/action/Action';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validationSchema = Yup.object({
  username: Yup.string()
    // .email('Invalid email address')
    .required('Username must be emilys'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

const Login = () => {
  // const [emailIn, setEmail] = useState("");
  // const [passwordIn, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [type, setType] = useState('password');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = async (values) => {
    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

          username: 'emilys',
          password: 'emilyspass',
          expiresInMins: 30,
        })
      })
      //  .then(res => res.json())
      const data = await res.json();
      if (data.username === values.username) {
        //  const token = res.token;
        //  const username = res.username;
        const { token, username } = data;
        // Dispatch login action
        dispatch(login_user(token, username));

        //  localStorage.setItem("token", JSON.stringify(data.token));
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
    catch (err) {
      console.log(err);
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
  const handleLoginwithotp = () => {
    navigate("/phonenumber");
  }
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={onSubmitHandler}>
      {({ isSubmitting }) => (
        <div className='main'>
          <div className="page">
            <SideImage />
            <div className="input">
              <Form>
                <h1>Lets Log in you in.</h1>
                <div className='email'>
                  <label htmlFor="" >Enter your email id </label><br />
                  <Field className='in' type="text" name="username" />
                  <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
                </div>
                <div className='password'>
                  <label htmlFor="">Enter your password</label><br />
                  <Field className='in' type={type} name="password" />

                  <span className='pass' onClick={passwordVisible}>{showPassword ? <FaEyeSlash /> : <FaEye />}  </span>
                  <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
                </div>
                <div className='btn'>
                  <span className="fg" onClick={handleForgot} title='click to reset your password'>Forgot password?</span>
                  <span className="otp" onClick={handleLoginwithotp} title='click to login with mobile no'>Otp Login</span>
                  <button type="submit" disabled={isSubmitting}>Log In</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  )
}
export default Login;