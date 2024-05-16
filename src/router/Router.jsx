import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Login from '../components/Login';
import Forgot from '../components/Forgot';
import Home from '../components/Home';
import Gamespage from '../components/sidebarpages/Gamespage';
import Dashboardpage from '../components/sidebarpages/Dashboardpage';
import Refreepage from '../components/sidebarpages/Refreepage';
import Eventpage from '../components/sidebarpages/Eventpage';
import Livepage from '../components/sidebarpages/Livepage';
import Notificationpage from '../components/sidebarpages/Notificationpage';
import Playerpage from '../components/sidebarpages/Playerpage';
import Teamspage from '../components/sidebarpages/Teamspage';
import Updatepage from '../components/sidebarpages/Updatepage';
import Userpage from '../components/sidebarpages/Userpage';
import Viewpage from '../components/sidebarpages/Viewpage';
import PrivateRoute from './PrivateRoute';
const Router = () => {
  return (
    <div>
        <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/forgot' element={<Forgot/>}/>

        {/* <Route path="" element={<PrivateRoute/>}>  */}
          <Route path='/home' element={<Home/>}/>
        {/* side bar route page */}
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
        {/* </Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router