import React from 'react'
import '../styles/Header.css'
import { useSelector } from 'react-redux';
// import { TfiHeadphoneAlt } from "react-icons/tfi";
const Header = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="header" >
        <span>Logo</span>
        {/* <span className='call'><TfiHeadphoneAlt/></span> */}
      <span className='call'>{user}</span>
    </div>
  )
}

export default Header