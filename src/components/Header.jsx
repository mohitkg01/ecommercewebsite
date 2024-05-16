import React from 'react'
import '../styles/Header.css'
import { TfiHeadphoneAlt } from "react-icons/tfi";
const Header = () => {
  return (
    <div className="header" >
        <span>Logo</span>
        <span className='call'><TfiHeadphoneAlt/></span>
    </div>
  )
}

export default Header