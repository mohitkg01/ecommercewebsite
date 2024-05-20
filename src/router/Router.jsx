import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Forgot from '../pages/forgot/Forgot.jsx';
import Home from '../pages/home/Home.jsx';
import Gamespage from '../pages/Gamespage';
import Dashboardpage from '../pages/Dashboardpage';
import Refreepage from '../pages/Refreepage';
import Eventpage from '../pages/Eventpage';
import Livepage from '../pages/Livepage';
import Notificationpage from '../pages/Notificationpage';
import Playerpage from '../pages/Playerpage';
import Teamspage from '../pages/Teamspage';
import Updatepage from '../pages/Updatepage';
import Userpage from '../pages/Userpage';
import Viewpage from '../pages/Viewpage';
import Login from '../pages/login/Login.jsx';
import PublicRoute from './PublicRoute.jsx';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  return (
    <div>
        <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path='/' element={<PublicRoute/>}>
          <Route path='/' element={<Login/>} />
          <Route path='/forgot' element={<Forgot/>}/>
          </Route>
          {/* privarte route  */}
        <Route path='' element={<PrivateRoute/>}> 
          <Route path='/home' element={<Home/>}/>
          <Route path='/game' element={<Gamespage/>}/>
          <Route path='/dash' element={<Dashboardpage/>}/>
          <Route path='/event' element={<Eventpage/>}/>
          <Route path='/live' element={<Livepage/>}/>
          <Route path='/notification' element={<Notificationpage/>}/>
          <Route path='/player' element={<Playerpage/>}/>
          <Route path='/refree' element={<Refreepage/>}/>
          <Route path='/team' element={<Teamspage/>}/>
          <Route path='/update' element={<Updatepage/>}/>
          <Route path='/users' element={<Userpage/>}/>
          <Route path='/view' element={<Viewpage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router