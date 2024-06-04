import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import '../styles/Common.css'
const Common = ({children}) => {
  return (
    <div className='common'>
      
        <Header/>
        <Sidebar/>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default Common