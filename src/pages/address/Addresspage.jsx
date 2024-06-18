import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import Paymentpage from '../payment/Paymentpage';
import { useDispatch, useSelector } from 'react-redux';
import { address_Data } from '../../reduxContainer/action/Action';
import '../../styles/Addresspage.css'
import { toast } from 'react-toastify';
import { TbLocationPause } from "react-icons/tb";

const Addresspage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addresses= useSelector(state => state.address)
    const latestAddress = addresses.length > 0 ? addresses[addresses.length - 1] : null;
    // console.log(addressSaved);
    const [pincode, setPincode] = useState(latestAddress ? latestAddress.postcode : '');
    const [formData, setFormData] = useState({
        state_district: latestAddress ? latestAddress.state_district : '',
        city: latestAddress ? latestAddress.city : '',
        state: latestAddress ? latestAddress.state : '',
        postcode: latestAddress ? latestAddress.postcode : ''
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
        // console.log('Form Data Submitted: ', formData);
        toast.success('Address Saved', {
            position: 'top-center'
        })
    };
    const handleSelectAddress = (selectedAddress) => {
        setFormData(selectedAddress)
    }
    const handlelocation=()=>{
        // setlocation(prev=>!prev);
        // setFormData()
        navigator.geolocation.getCurrentPosition(pos => {
            const { latitude, longitude } = pos.coords;
            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setFormData({
                        state_district: data.address.state_district,
                        city: data.address.city,
                        state: data.address.state,
                        postcode: data.address.postcode
                    });
                    setPincode(data.address.postcode)
                    toast.success('Location Fetched', {
                        position: 'top-center'
                    });
                })
    }
)
}

    return (
        <div id='addresspage'>
            <h1>Enter Your Address</h1>
            <span><h3>Saved Address</h3></span>
           
                {latestAddress ? (
                  
                    <div className='savedaddress' onClick={() => handleSelectAddress(latestAddress)}>
                        <span>Street: {latestAddress.state_district}</span>
                        <span>City: {latestAddress.city}</span>
                        <span>Zip: {latestAddress.postcode}</span>
                        <span>State: {latestAddress.state}</span>
                    </div>
                ) : (
                    <div className='savedaddress' title='Enter address below'>
                        <span>Street: NA</span>
                        <span>City: NA</span>
                        <span>Zip: NA</span>
                        <span>State: NA</span>
                    </div>
                )}
            
            <span className='pincode'>
                <input type="text" placeholder='Enter your pincode' value={pincode} onChange={e=>setPincode(e.target.value)}/>
                <TbLocationPause onClick={handlelocation} style={{cursor:'pointer'}} className='lc'/></span>
            {/* {islocation ?<Loaction />:( */}
                <form onSubmit={handleSubmit}>
                    {/* <div className='address-name'>
                        <label>
                            Name:
                            <input 
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </label>
                    </div> */}
                    <div className='address-address'>
                        <label>
                            Address:
                            <input
                                type="text"
                                name="state_district"
                                value={formData.state_district}
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
                                name="postcode"
                                value={formData.postcode}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <button className='addbtn' type="submit">Submit</button>
                </form>
            {/* )} */}
           
            
        </div>
    )
}

export default Addresspage