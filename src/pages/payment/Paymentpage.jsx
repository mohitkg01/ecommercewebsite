import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import '../../styles/Paymentpage.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Order_List } from '../../reduxContainer/action/Action';

const Paymentpage = () => {
  const addresses= useSelector(state => state.address)
  const latestAddress = addresses.length > 0 ? addresses[addresses.length - 1] : null;
  const total=useSelector(state=>state.amount);
  const [paymentSuccess,setPaymentSuccess]=useState(false);
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch=useDispatch();
  // console.log(cartItems);
  const navigate=useNavigate();
    const onToken=(token)=>{
        console.log(token);
        toast.success('Order Placed',{
          position:'top-center'
        })
        setPaymentSuccess(true);
        dispatch(Order_List(cartItems));
    }
const handleShop=()=>{
  navigate('/product')
}
  return (
    <div id='paymentpage'>
      {paymentSuccess ? (
        <div className='payment-success'>
          <h1>Order Placed Successfully!</h1>
          <button onClick={handleShop}>Shop More</button>
          <button >Exit</button>
        </div>
      ) : (
      <>
        <span className='address' >
            <h1>Your Address</h1>
          <div className='address-data'>
          {/* <span> {add.name}</span> */}
          <span>Street: {latestAddress.state_district}</span>
          <span>City: {latestAddress.city}</span>
          <span>Zip: {latestAddress.postcode}</span>
          <span>State: {latestAddress.state}</span>
            </div>
        </span>
      <div className='total-amount'>
        <h2>Total Amount: ${total}</h2>
      </div>
          <StripeCheckout
              token={onToken}
              stripeKey="pk_test_51PQt39P9YXGGnlYgHjSnLoIZHctqefZ75A8pkgxbtvLRSSpprtgwohucztGs9QJZP8jJwV1mu9cm5lQMHeJ7FTnc00X78uNvFN"
          />
          </>)}
    </div>
  )
}

export default Paymentpage