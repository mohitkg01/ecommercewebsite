import React from 'react'
import { useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import { useNavigate } from 'react-router-dom';
import '../../styles/Popup.css'
import Pagination from "react-js-pagination";
import '../../styles/Productpage.css'
import Search from '../search/Search';
import Deleteproduct from '../delete/Deleteproduct';
import Editproduct from '../edit/Editproduct';
import Loaderanimation from '../../HOC/Loaderanimation';
import withLoader from '../../HOC/Loader/withLoader';


const Productpage = ({ isLoading, setLoading }) => {
  // console.log(props);
  const [items, setItems] = useState([]);
  const [currpage,setCurrpage]=useState(1);
  const [totalItems, setTotalItems] = useState(0);
  

  // const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();
const itemsPerPage=9;
  const togglePopup = () => {
    navigate('/product/addproduct');
    // setIsOpen(!isOpen);
  };
  const handlePageChange = (pageNumber) => {
    setCurrpage(pageNumber);
    // console.log(pageNumber);
  };
 
  useEffect(() => {

    const fetchData=async()=>{
      setLoading(true);
      try {
        const res=await fetch(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currpage - 1) * itemsPerPage}`)
        const data = await res.json();  
        setItems(data.products);
        setTotalItems(data.total);
        setLoading(false);
      }
      catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
      fetchData();
  }, [currpage, setLoading]);

    
  // console.log(items);

  //fetching data
  // useEffect(()=>{
  //     axios.get("https://dummyjson.com/products").then((res)=>
  //     {
  //         setItems(res.data);
  //     })
  // },[]);
  const handleDelete = (deletedItemId) => {
    setItems(items.filter(item => item.id !== deletedItemId));
    setTotalItems(totalItems - 1);
  };
  
  return (
    <>
    <div>
        <button onClick={togglePopup} className="btn-modal">
          Add Product
        </button>
      </div>
      <div className="search">
        <Search/>
      </div>
     
    <div className='product'>
     {/* {items.length > 0 ? ( */}
        {isLoading ? <Loaderanimation /> :
          items.map((item) => (
            <div key={item.id}>
              <Cards data={item} />
              <Deleteproduct data={item} onDelete={handleDelete} />
              <Editproduct data={item} />
            </div>
          ))}

        {/* ) : (
          <Loaderanimation />
        )} */}
     </div>
     <div >
      <Pagination
        activePage={currpage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={200}
        pageRangeDisplayed={10}
        onChange={handlePageChange}
      />
      </div>
    </>
  )
}

export default withLoader(Productpage);