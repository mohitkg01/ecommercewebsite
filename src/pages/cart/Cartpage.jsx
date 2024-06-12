import React from 'react'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cartpage = () => {
  const navigate=useNavigate();
    const cartItems = useSelector((state) => state.cartItems);
    // console.log(cartItems);
    const handleCartItem=()=>{
      navigate('/cartItem')
    }
  return (
    <>
          <span onClick={handleCartItem}><PiShoppingCartSimpleBold />
              <span className='numbr'>{cartItems.length}</span></span>
    </>
  )
}

export default Cartpage