import React from 'react'
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import '../../styles/Paymentpage.css'

const Paymentpage = () => {
  const add = useSelector(state => state.addresses)
    const total=useSelector(state=>state.amount);

    const onToken=(token)=>{
        console.log(token);
    }

  return (
    <div id='paymentpage'>
        <span className='address' >
            <h1>Your Address</h1>
          <div className='address-data'>
          {/* <span> {add.name}</span> */}
          <span>Street: {add.state_district}</span>
          <span>City: {add.city}</span>
          <span>Zip: {add.postcode}</span>
          <span>State: {add.state}</span>
            </div>
        </span>
      <div className='total-amount'>
        <h2>Total Amount: ${total}</h2>
      </div>
          <StripeCheckout
              token={onToken}
              stripeKey="pk_test_51PQt39P9YXGGnlYgHjSnLoIZHctqefZ75A8pkgxbtvLRSSpprtgwohucztGs9QJZP8jJwV1mu9cm5lQMHeJ7FTnc00X78uNvFN"
          />
    </div>
  )
}

export default Paymentpage