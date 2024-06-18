import React from 'react'
import { useSelector } from 'react-redux'
import '../../styles/Profile.css'
const Profile = () => {
    const user=useSelector(state=>state.user)
    const email=''
    const mobile=''
  return (
    <div className='profilepage'>
        <h1>Profile Details</h1>
        <div className='profile'>
              <input type='image' src='' alt='' className='profile-image' />
              <div className='details'>
                  <span className='detail-item'>User: {user ? user : 'NA'}</span>
                  <span className='detail-item'>Email: {email ? email : 'NA'}</span>
                  <span className='detail-item'>Mo No: {mobile ? mobile : 'NA'}</span>
              </div>
         </div>
    </div>
  )
}

export default Profile