import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Common = ({children}) => {
  return (
    <div className='common'>
        <Header/>
        <Sidebar/>
        {children}
    </div>
  )
}

export default Common