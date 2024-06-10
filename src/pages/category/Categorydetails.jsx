import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../../components/Cards';
import Deleteproduct from '../delete/Deleteproduct';
import Editproduct from '../edit/Editproduct';
import Category from './Category';
import withLoader from '../../HOC/Loader/withLoader';
import Loaderanimation from '../../HOC/Loaderanimation';


const Categorydetails = ({ isLoading, setLoading }) => {
    const {type}=useParams();
    const [newList,setnewList]=useState([]);

    useEffect(()=>{
    const fetchProducts=async ()=>{
        setLoading(true);
        try{
        const response=await fetch(`https://dummyjson.com/products/category/${type}`)
        const data = await response.json();
        setnewList(data.products);
        setLoading(false)
        }
        catch(err){
            setLoading(false);
            console.log("Error in fetching :",err);
        };
    }
        fetchProducts();
    },[type,setLoading]);


    const handleDelete = (deletedItemId) => {
        setnewList(newList.filter(item => item.id !== deletedItemId));
    };
  return (
      <div id='category' className='product'>
          <div className='cate'><Category /></div>

          <div className='cadet'>
        {/* { newList.length>0 ? */}
    {isLoading? <Loaderanimation/>:
       newList.map((item)=>{
            return(
                <div key={item.id} >
                    <Cards data={item} />
                    <Deleteproduct data={item} onDelete={handleDelete} />
                    <Editproduct data={item} />
                </div>
            )
        }
              ) }
              {/* : <Loaderanimation />} */}
              </div>
      </div>
  )
}

export default withLoader(Categorydetails);