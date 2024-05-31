import React from 'react'
import Common from '../layout/Common'
import { Navigate,Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const token = useSelector((state) => state.user.token);
  // console.log((token));
  // const token=localStorage.getItem("token");
  
  if(!token){
  return <Navigate to="/"/>
}
  return <Common><Outlet/></Common>
}

export default PrivateRoute