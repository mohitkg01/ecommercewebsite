import React, { useEffect, useState } from 'react'
const Eventpage = () => {
  const [categorylist,setCategorylist]=useState([]);

  useEffect(()=>{
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(data=>{
        // console.log(data);
        setCategorylist(data);
      });
  })
 
  return (
    <div id='event'>
        {/* {categorylist.map((cat)=>(
            <div>{cat}</div>
        ))} */}
      <form action="">
        <label htmlFor="">Select cateogry</label>
        <select name="" id="">
          {categorylist.map((cat)=>(
            <option value="">{cat}</option>
          ))}
        </select>
      </form>
</div>
  )
}

export default Eventpage