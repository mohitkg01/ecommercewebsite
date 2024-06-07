import LottieLoader from 'react-lottie-loader';
import animation from '../../assets/Animation - 1717757830669.json';
import '../../styles/Loaderanimation.css'
import React from 'react'
const Loaderanimation = () => {
  return (
    <div className='animation'>
          <LottieLoader animationData={animation} />
    </div>
  )
}
export default Loaderanimation