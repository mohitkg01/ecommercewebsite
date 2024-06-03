import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
// import Addproduct from '../popuppage/Addproduct';
// import Addproduct from '../popuppage/Addproduct';

const Editproduct = ({data}) => {
  const navigate=useNavigate();

  
  // console.log(data.id);
  const handleEdit = (id) => {
   navigate(`addproduct/${id}`)
  }
  return (
    <span id='editproduct' className='editbtn' onClick={()=>handleEdit(data.id)}><FaRegEdit/></span>
  )
}

export default Editproduct