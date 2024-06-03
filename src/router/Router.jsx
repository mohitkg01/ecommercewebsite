import React from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Forgot from '../pages/forgot/Forgot.jsx';
import Home from '../pages/home/Home.jsx';
import Gamespage from '../pages/sidebarspages/Gamespage.jsx';
import Dashboardpage from '../pages/sidebarspages/Dashboardpage';
import Refreepage from '../pages/sidebarspages/Refreepage';
import Livepage from '../pages/sidebarspages/Livepage';
import Notificationpage from '../pages/sidebarspages/Notificationpage';
import Playerpage from '../pages/sidebarspages/Playerpage';
import Teamspage from '../pages/sidebarspages/Teamspage';
import Updatepage from '../pages/sidebarspages/Updatepage';
import Userpage from '../pages/sidebarspages/Userpage';
import Viewpage from '../pages/sidebarspages/Viewpage';
import Login from '../pages/login/Login.jsx';
import PublicRoute from './PublicRoute.jsx';
import PrivateRoute from './PrivateRoute';
import Productpage from '../pages/productpage/Productpage.jsx';
import Productdetail from '../pages/detailsproduct/Productdetail.jsx';
import Addproduct from '../pages/popuppage/Addproduct.jsx';
import Search from '../pages/search/Search.jsx';
import Category from '../pages/category/Category.jsx';
import Categorydetails from '../pages/category/Categorydetails.jsx';



const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public route */}
          <Route path='/' element={<PublicRoute />}>
            <Route path='/' element={<Login />} />
            <Route path='/forgot' element={<Forgot />} />
          </Route>
          {/* privarte route  */}
          <Route path='' element={<PrivateRoute />}>
            <Route path='/home' element={<Home />} />
            <Route path='/game' element={<Gamespage />} />
            <Route path='/dash' element={<Dashboardpage />} />
            <Route path='/live' element={<Livepage />} />
            <Route path='/notification' element={<Notificationpage />} />
            <Route path='/player' element={<Playerpage />} />
            <Route path='/refree' element={<Refreepage />} />
            <Route path='/team' element={<Teamspage />} />
            <Route path='/update' element={<Updatepage />} />
            <Route path='/users' element={<Userpage />} />
            <Route path='/view' element={<Viewpage />} />
            <Route path='/product' element={<Productpage />} />
            <Route path='/product/productdetails/:id' element={<Productdetail />} />
            <Route path='/product/addproduct' element={<Addproduct />} />
            <Route path='/product/searchproduct' element={<Search />} />
            <Route path='category' element={<Category />} />
            <Route path='/category/categorydetails/:type' element={<Categorydetails />} />
            <Route path='/product/addproduct/:id' element={<Addproduct/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router