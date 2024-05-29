import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../../components/Cards';

const Categorydetails = () => {
    const {type}=useParams();
    const [newList,setnewList]=useState([]);

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${type}`)
            .then(res => res.json())
            .then((data)=>{
                setnewList(data.products);
            });
    })

  return (
      <div id='categorydetails' className='product'>
        {newList.map((item)=>(
            <Cards data={item}/>
        ))}
      </div>
  )
}

export default Categorydetails