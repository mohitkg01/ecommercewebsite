import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/Productdetail.css'
const Productdetail = (props) => {
// console.log(props);
const [product,setProduct]=useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      });
  }, [id]);

  return (
    <div className='product-details'>
      <div className='img-container'><img src={product.thumbnail} alt="" /></div>

      <div className='details'>
      <div className='title'>
      <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
        <div className="price-section">
          <div className='price'>
            <span className='label'>Price:</span>
            <span className='value'> ${product.price}</span>
          </div>
          <div className='discount'>
            <span className='label'>Discount:</span>
            <span className='value'>{product.discountPercentage}%</span>
          </div>   
        </div>
        <div className="rating-section">
          <span className='label'>Rating:</span>
          <span className='value'>{product.rating}</span>
        </div>
        <div className='btnshop'>
          <button>Buy Now</button>
          </div>
      </div>
      
    </div>
  )
}

export default Productdetail