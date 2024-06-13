import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Paymentpage from '../payment/Paymentpage';
import { useDispatch } from 'react-redux';
import { address_Data } from '../../reduxContainer/action/Action';
import '../../styles/Addresspage.css'

const Addresspage = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/cartItem/addresspage/paymentpage')
        dispatch(address_Data(formData))
        console.log('Form Data Submitted: ', formData);
        
    };
    return (
        <div id='addresspage'>
            <h1>Enter Your Address</h1>
            <form onSubmit={handleSubmit}>
                <div className='address-name'> 
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='address-address'>
                    <label>
                        Address:
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='address-city'>
                    <label>
                        City:
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='address-state'>
                    <label>
                        State:
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='address-zip'>
                    <label>
                        ZIP Code:
                        <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Addresspage