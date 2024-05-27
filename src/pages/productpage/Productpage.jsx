import React from 'react'
import { useEffect, useState } from 'react'
import Cards from '../../components/Cards';
import { useNavigate } from 'react-router-dom';
// import Addproduct from './popuppage/Addproduct';
// import Productdetail from './Productdetail';
import '../../styles/Popup.css'
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Productpage.css'
import Search from '../search/Search';

const Productpage = (props) => {
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
    fetch(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currpage - 1) * itemsPerPage}`)
      .then(res => res.json())
      .then(data =>{ setItems(data.products)
        setTotalItems(data.total);
      })
  }, [currpage]);
  // console.log(items);

  //fetching data
  // useEffect(()=>{
  //     axios.get("https://dummyjson.com/products").then((res)=>
  //     {
  //         setItems(res.data);
  //     })
  // },[]);
  return (
    <>
    <div>
        <button onClick={togglePopup} className="btn-modal">
          Add Product
        </button>
        {/* {isOpen && (<div><Addproduct /></div>)} */}
        
        {/* {isOpen && (
          <div className="modal">
            <div onClick={togglePopup} className="overlay"></div>
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                perferendis suscipit officia recusandae, eveniet quaerat assumenda
                id fugit, dignissimos maxime non natus placeat illo iusto!
                Sapiente dolorum id maiores dolores? Illum pariatur possimus
                quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                placeat tempora vitae enim incidunt porro fuga ea.
              </p>
              <button className="close-modal" onClick={togglePopup}>
                CLOSE
              </button>
            </div>
          </div>
        )} */}
      </div>
      <div className="search">
        <Search/>
      </div>
    <div className='product'>
      {items.map((item,id) => (
          <Cards data={item}  />
      ))}
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

export default Productpage