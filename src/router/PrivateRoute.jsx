import React from 'react'
import Common from '../layout/Common'
import { Navigate,Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const tokens = useSelector((state) => state.token);
  // const user = useSelector((state) => state.user);
  // const log = useSelector((state) => state.loggedIn);
  // console.log(tokens);
  // console.log(log);
  // console.log(user);  

  // const token=localStorage.getItem("token");
  
  if(!tokens ){
  return <Navigate to="/"/>
}
  return <Common><Outlet/></Common>
}

export default PrivateRoute