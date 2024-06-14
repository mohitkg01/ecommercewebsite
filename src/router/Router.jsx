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
// import Category from '../pages/category/Category.jsx';
import Categorydetails from '../pages/category/Categorydetails.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhoneNumber from '../pages/login/otplogin/PhoneNumber.jsx';
import Otppage from '../pages/login/otplogin/Otppage.jsx';
import CartItem from '../pages/cart/CartItem.jsx';
import Addresspage from '../pages/address/Addresspage.jsx';
import Paymentpage from '../pages/payment/Paymentpage.jsx';
import ViewAddress from '../pages/address/ViewAddress.jsx';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public route */}
          <Route path='/' element={<PublicRoute />}>
            <Route path='/' element={<Login />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/phonenumber' element={<PhoneNumber />} />
            <Route path='phonenumber/otppage' element={<Otppage/>}/>
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
            <Route path='category' element={<Categorydetails />} />
            <Route path='/category/:type' element={<Categorydetails />} />
            <Route path='/addproduct/:id' element={<Addproduct/>}/>
            <Route path='/cartItem' element={<CartItem/>}/>
            <Route path='/cartItem/addresspage' element={<Addresspage/>}/>
            <Route path='/cartItem/addresspage/savedaddress' element={<ViewAddress/>}/>
            <Route path='/cartItem/addresspage/paymentpage' element={<Paymentpage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default Router