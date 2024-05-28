import React, { useState } from 'react'
import Cards from '../../components/Cards';
import { CiSearch } from "react-icons/ci";
import Deleteproduct from '../delete/Deleteproduct';

const Search = () => {
const [newlist,setnewlist]=useState([]);

// const handleSearch=(e)=>{
//     setSearch(e.target.value);
//     // console.log(e.target.value);
// }
  const handleDelete = (deletedItemId) => {
    setnewlist(newlist.filter(item => item.id !== deletedItemId));
    // setTotalItems(totalItems - 1);
  };
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
          <input type="text" onChange={(e) => handleSearch(e.target.value)} placeholder='Search.....'/> 
          <CiSearch />
          </span>
          <div className='product'>
            {newlist.map((item)=>{
              return(<>
                <Cards data={item} />
                <Deleteproduct data={item} onDelete={handleDelete}/>
              </>)
            }
               )}
            </div>  
    </>
  )
}

export default Search