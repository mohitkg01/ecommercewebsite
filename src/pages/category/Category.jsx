import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';
import '../../styles/Category.css';

const Category = () => {
  const [categorylist, setCategoryList] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try{
        const response = await fetch('https://dummyjson.com/products/category-list')
        const data = await response.json();
        setCategoryList(data);
      }catch(err){
        console.error('Error fetching the category list:', err);
      }
    }
    fetchCategories();
  },[])
  
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