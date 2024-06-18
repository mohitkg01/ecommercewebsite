import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { walletAmount } from '../../reduxContainer/action/Action';
import { toast } from 'react-toastify';
import '../../styles/Walletpage.css'

const Walletpage = () => {
    const [amount, setAmount] = useState();
    const dispatch=useDispatch();
    const wallet=useSelector(state=>state.wallet);

    const handleAddMoney = () => {
        const addedAmount = parseFloat(amount);
        if (isNaN(addedAmount) || addedAmount <= 0) {
            alert('Please enter a valid amount');
            return;
        }
        dispatch(walletAmount(addedAmount));
        setAmount('');
        toast.success('Money Added',{
            position:'top-center'
        })
    };

  return (
      <div id='wallet'>
          <div className="wallet-container">
              <h2>My Wallet</h2>
              <div className="wallet-balance">
                  <h3>Balance: ${wallet}</h3>
              </div>
              <div className="wallet-add-money">
                  <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount to add"
                      className="wallet-input"
                  />
                  <button onClick={handleAddMoney} className='btn-wallet' >Add Money</button>
              </div>
              <div className="wallet-transactions">
                  <h4>Recent Transactions</h4>
                  <ul>
                      <li>₹500 credited on 10th June, 2024</li>
                      <li>₹200 debited on 9th June, 2024</li>
                      <li>₹1000 credited on 8th June, 2024</li>
                  </ul>
              </div>
          </div>

      </div>
  )
}

export default Walletpage