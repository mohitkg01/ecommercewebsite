import React, { useState } from 'react'
import Cards from '../../components/Cards';
import { CiSearch } from "react-icons/ci";

const Search = () => {
const [newlist,setnewlist]=useState([]);

// const handleSearch=(e)=>{
//     setSearch(e.target.value);
//     // console.log(e.target.value);
// }

    const handleSearch=(search)=>{
    fetch(`https://dummyjson.com/products/search?q=${search}`)
            .then(res => res.json())
            .then(data=>{
                // console.log(data);
                setnewlist(data.products)
                // navigate('/product/searchproduct')   
            }
                );
        //   console.log("clicker");
    }
    // console.log(newlist);
  return (
    <>
          <span className='searchpage'>
          <input type="text" onChange={(e) => handleSearch(e.target.value)} placeholder='Enter your item to search...'/> 
          <CiSearch />
          </span>
          <div className='product'>
            {newlist.map((item)=>
                <Cards data={item}/>)}
            </div>  
    </>
  )
}

export default Search