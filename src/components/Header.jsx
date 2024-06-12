import React from 'react'
import '../styles/Header.css'
import { useSelector } from 'react-redux';
// import { TfiHeadphoneAlt } from "react-icons/tfi";

// import { BsLayoutTextSidebar } from "react-icons/bs";
import Sidebar from './Sidebar';
import Cartpage from '../pages/cart/Cartpage';
const Header = () => {
  // const [isOpen,setisOpen]=useState(false);
  // const [openlist,setlist]=useState(true);
  const user = useSelector((state) => state.user);

  // const handleSidebar=()=>{
  //   setisOpen((prev) => !prev);
  //   // setlist(false);
  // }
  return (
    <div className="header" >
      <span className='left'>
        <span className='headerleft' >
          {/* <span className={`sideicon ${isOpen ? 'active' : ''}`}
            onClick={handleSidebar} ><BsLayoutTextSidebar/></span> */}
        <span className='logo'>Logo</span>
        </span>
        {/* <span id='opensidebar'>{isOpen && <Sidebar />}</span> */}
        <Sidebar/>
        
      </span>
      <span className='right'>
        <span className='call'><Cartpage/></span>
        <span className='user'>{user}</span>
      </span>
    </div>
  )
}

export default Header