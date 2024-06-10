import LottieLoader from 'react-lottie-loader';
import animation from '../HOC/Loader/Animation - 1717757830669.json';
import '../styles/Loaderanimation.css'
import React from 'react'
const Loaderanimation = () => {
  return (
    <div className='animation'>
          <LottieLoader animationData={animation} />
      <span className="visually-hidden"><h3>Loading...</h3></span>
    </div>
  )
}
export default Loaderanimation