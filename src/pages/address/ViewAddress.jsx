import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/Viewaddress.css'
import { useNavigate } from 'react-router-dom'
import { address_Data, delete_Address } from '../../reduxContainer/action/Action'
import { MdDeleteForever } from "react-icons/md";
import { toast } from 'react-toastify'
const ViewAddress = () => {
    const navigate = useNavigate();
    const addresses = useSelector(state => state.address)
    const dispatch = useDispatch();
    // console.log(addresses);

    const handleAddress = () => {
        navigate('/cartItem/addresspage')
    }
    const handleSelectAddress = (add) => {
        dispatch(address_Data(add))
        navigate('/cartItem/addresspage')
    }
    const deleteAddress = (id) => {
        // console.log(id);
        dispatch(delete_Address(id));
        toast.success('Address Deleted',{
            position:'top-center'
        })
    }
    return (
        <>
            <button className='add-btn' onClick={handleAddress} style={{width:'auto'}}>Add Address</button>
            <div className='viewaddress' id='addresses'>
                <h2>Saved Address</h2>
                {addresses.length>0 ?
               ( addresses.map((add, index) => (
                    <div key={index} className='address-container'>
                        <span onClick={() => deleteAddress(index)} className='dlt-add'><MdDeleteForever /></span> 
                        <div key={index} className='add' onClick={() => handleSelectAddress(add)} >
                            <span>Street: {add.state_district}</span>
                            <span>City: {add.city}</span>
                            <span>Zip: {add.postcode}</span>
                            <span>State: {add.state}</span>
                        </div>
                    </div>))):(
                        <h2>No address saved</h2>
                    )}
            </div>
        </>
    )
}

export default ViewAddress