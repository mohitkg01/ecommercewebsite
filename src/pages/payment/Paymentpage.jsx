import React from 'react'
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import '../../styles/Paymentpage.css'
const Paymentpage = () => {
    // console.log(props);
    const address=useSelector(state=>state.address);
    // console.log(address);
    const onToken=(token)=>{
        console.log(token);
    }
  return (
    <div id='paymentpage'>
        <span className='address' >
            <h1>Your Address</h1>
          <div className='address-data'>
          <span> {address.name}</span>
          <span>{address.address}</span>
          <span>{address.city}</span>
          <span>{address.zip}</span>
          <span>{address.state}</span>
            </div>
        </span>
          <StripeCheckout
              token={onToken}
              stripeKey="pk_test_51PQt39P9YXGGnlYgHjSnLoIZHctqefZ75A8pkgxbtvLRSSpprtgwohucztGs9QJZP8jJwV1mu9cm5lQMHeJ7FTnc00X78uNvFN"
          />
    </div>
  )
}

export default Paymentpage