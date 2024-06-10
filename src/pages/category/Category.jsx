import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../styles/Category.css';
// import Categorydetails from './Categorydetails';

const Category = () => {
  const [categorylist, setCategoryList] = useState([]);
  const [selecttype, setSelectedtype] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/category-list')
        const data = await response.json();
        setCategoryList(data);
      } catch (err) {
        console.error('Error fetching the category list:', err);
      }
    }
    fetchCategories();
  }, [])

  const movetocategorygDetails = (cat) => {
    setSelectedtype(cat);
    if (cat) {
      navigate(`/category/${cat}`)
    }
  }
  return (
    <div id='categoryn' className='categorylist'>

      <label >Choose a category:</label>
      <select value={selecttype}
        onChange={(e) => movetocategorygDetails(e.target.value)}
      >
        <option value="" disabled>Select a category</option>
        {categorylist.map((list, index) => (
          <option key={index} value={list}>{list}</option>
        ))}
      </select>
    </div>
  )
}

export default Category