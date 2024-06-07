import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../../components/Cards';
import Deleteproduct from '../delete/Deleteproduct';
import Editproduct from '../edit/Editproduct';
import Loaderanimation from '../animation/Loaderanimation';

const Categorydetails = () => {
    const {type}=useParams();
    const [newList,setnewList]=useState([]);

    useEffect(()=>{
    const fetchProducts=async ()=>{
        try{
        const response=await fetch(`https://dummyjson.com/products/category/${type}`)
        const data = await response.json();
        setnewList(data.products);
        }
        catch(err){
            console.log("Error in fetching :",err);
        };
    }
        fetchProducts();
    },[type]);


    const handleDelete = (deletedItemId) => {
        setnewList(newList.filter(item => item.id !== deletedItemId));
    };
  return (
      <div id='categorydetails' className='product'>
        { newList.length>0 ?newList.map((item)=>{
            return(
                <div key={item.id}>
                    <Cards data={item} />
                    <Deleteproduct data={item} onDelete={handleDelete} />
                    <Editproduct data={item} />
                </div>
            )
        }
        ) :<Loaderanimation/>}
      </div>
  )
}

export default Categorydetails