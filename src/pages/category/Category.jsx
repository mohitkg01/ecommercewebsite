import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';
import '../../styles/Category.css';

const Category = () => {
  const [categorylist, setCategorylist] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setCategorylist(data);
      });
  })
  const movetocategorygDetails=(cat)=>{
    navigate(`categorydetails/${cat}`)
  }
  return (
    <div id='category'  className='categorylist'>
      {categorylist.map((list) => (
        <button onClick={() =>movetocategorygDetails(list)}>{list}</button>
      ))}
    </div>
  )
}

export default Category