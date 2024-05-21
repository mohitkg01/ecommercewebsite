import React from 'react'
import { useEffect, useState } from 'react'
import Cards from '../components/Cards';

const Productpage = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setItems(data.products))
  }, []);
  // console.log(items);

  //fetching data
  // useEffect(()=>{
  //     axios.get("https://dummyjson.com/products").then((res)=>
  //     {
  //         setItems(res.data);
  //     })
  // },[]);
  return (
    <div className='product'>
      {items.map((item) => (
        <Cards data={item} />
      ))}

    </div>

  )
}

export default Productpage