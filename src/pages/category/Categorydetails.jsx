import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../../components/Cards';
import Deleteproduct from '../delete/Deleteproduct';
import Editproduct from '../edit/Editproduct';

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
    const handleDelete = (deletedItemId) => {
        setnewList(newList.filter(item => item.id !== deletedItemId));
    };
  return (
      <div id='categorydetails' className='product'>
        {newList.map((item,id)=>{
            return(
                <div key={id}>
                    <Cards data={item} />
                    <Deleteproduct data={item} onDelete={handleDelete} />
                    <Editproduct data={item} />
                </div>
            )
        }
        )}
      </div>
  )
}

export default Categorydetails