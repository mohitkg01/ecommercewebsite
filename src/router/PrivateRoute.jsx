import React from 'react'
import Common from '../layout/Common'
import { Navigate,Outlet } from 'react-router-dom';
const PrivateRoute = () => {
  const token=localStorage.getItem("token");
  
  if(!token){
  return <Navigate to="/"/>
}
  return <Common><Outlet/></Common>
}

export default PrivateRoute