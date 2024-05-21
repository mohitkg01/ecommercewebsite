import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
    const token=localStorage.getItem("token");

if(token){
  return (
    <div>
    <Navigate to="home"/>
    </div>
  )}
  return <Outlet/>
}

export default PublicRoute