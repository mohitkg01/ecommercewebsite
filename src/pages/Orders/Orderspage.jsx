import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/Orderspage.css'
import { Cancel_orderList} from '../../reduxContainer/action/Action';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Orderspage = () => {
  const list=useSelector(state=>state.order);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  // console.log(list);
  const handleCancel=(id)=>{
    dispatch(Cancel_orderList(id));
    toast.success('Order Canceled',{
      position:'top-center'
    })
  }
  const handleUpdate=()=>{
    navigate('/cartItem');
  }

  return (
    <div id='order'>
      <h1>Order List</h1>
      {list.length > 0 ? (
      list.map((item,index)=>(
        <div className='order-list' key={index}>
          <span><img src={item.thumbnail} alt=""  style={{width:'10rem',height:'10rem'}}/></span>
          <span>{item.title}</span>
          <span>Qn: {item.quantity}</span>
          <span>${item.price}</span>
          <span>
            <button onClick={()=>handleCancel(item.id)}>Cancel</button>
            <button onClick={handleUpdate}>Update</button> 
          </span>
        </div>
        
      ))
    ):(
      <h2>You have no orders</h2>
    )}
    </div>
  )
}

export default Orderspage