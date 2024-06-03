import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../../styles/Productdetail.css';
import { Rating } from 'react-simple-star-rating'
// import ReactStars from "react-rating-stars-component";
// import OwlCarousel from 'react-owl-carousel';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Productdetail = (props) => {

const [product,setProduct]=useState([]);
  const [images, setImage] = useState([])
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setImage(data.images)
      });
  }, [id]);
  // console.log(images.length);

  return (
    <div className='product-details'>
      {/* <div className='img-container'> */}
      <Carousel>
          {/* <div className='img-container'> */}
        {images.map((image)=>(
         
            <img src={image} alt=""/>
           
        ))}
          {/* </div> */}
      </Carousel>
       {/* </div> */}
      <div className='details' key={product.id}>
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
          {/* <span className='value'>{product.rating}</span> */}
          {/* <span className='value'><Rating initialValue={product.rating} readonly /></span> */}
        
          <Rating 
          readonly={true}
          initialValue={product.rating}
          allowFraction={true}
          size={25}
          />
         
        </div>
        <div className='btnshop'>
          <button>Buy Now</button>
          </div>
      </div>
      
    </div>
  )
}

export default Productdetail