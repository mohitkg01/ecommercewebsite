import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../../styles/CartItem.css'
import { HiOutlinePlusSm, HiMinusSm } from "react-icons/hi";
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { clearCartAction, decrease_Quantity, increase_Quantity, removeItemAction } from '../../reduxContainer/action/Action';
import { IoIosClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const CartItem = () => {
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch=useDispatch();
    const navigate=useNavigate();

const handleDecreaseQuantity=(itemId)=>{
    dispatch(decrease_Quantity(itemId))
    // console.log('decrease');
}
const handleIncreaseQuantity=(itemId)=>{
    dispatch(increase_Quantity(itemId))
    // console.log(increase_Quantity);
    // console.log("increase");
}
const handleRemove = (itemId) => {
        dispatch(removeItemAction(itemId));
    };
 const handleClear = () => {
        dispatch(clearCartAction());
    };
    const closehandler = () => navigate('/product');
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  return (
      <div id='cartItem'>
          <span className='ci-close'><IoIosClose onClick={closehandler} /></span>
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item,id) => (
                  <div key={id} className='cartitem'>
                      <Card  className="ci-card">
                          <Card.Img  src={item.thumbnail}  className='ci-image'/>
                          <Card.Body>
                              <Card.Title className='ci-title'>{item.title}</Card.Title>
                                <span>
                                  <span className='price'>Price:${item.price}</span>
                                  <span className='total'>Total:${item.quantity * item.price}</span>
                                </span>
                              <span className='quantity-control'>
                                  Quantity:
                                  <span onClick={() => handleDecreaseQuantity(item.id)}><HiMinusSm /></span>
                                  <span className='quantity'> {item.quantity}</span>
                                  <span onClick={() => handleIncreaseQuantity(item.id)}><HiOutlinePlusSm /></span>
                              </span>
                              <Button  className='ci-btn'onClick={() => handleRemove(item.id)}>
                                  Remove
                              </Button>
                          </Card.Body>
                      </Card>
                     
                  </div>
              ))}
              <span className='ci2btn'>
                  <button className='ci-btn'  onClick={handleClear}>ClearCart</button>
                  <button className='ci-btn'> Buy Now</button>
                  </span>
                  <span>Sub Total: ${subtotal.toFixed(2)}</span>
              </>
            ): <h1>Your cart is empty.</h1>
          }
      </div>
  )
}

export default CartItem