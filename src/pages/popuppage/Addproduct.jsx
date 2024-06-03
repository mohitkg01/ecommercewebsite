import React, { useEffect, useState} from 'react'
import '../../styles/Addproduct.css'
import { useNavigate, useParams } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';
import { IoIosClose } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdPreview } from "react-icons/md";
const Addproduct = () => {
    const {id}=useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState([]);
    const [thumbnail, setThumbnail] = useState();
    const [discount, setDiscount] = useState();
    const [discription, setDiscription] = useState();
    const [stock, setStock] = useState();
    const [rating, setRating] = useState();
    const [isThumbnail, setIsThumbnail]=useState(false);
    const [isImage,setIsImage]=useState(false);
    const [thumbnailPreview, setThumbnailPreview] = useState("");
    const [isBtnPreview,setBtnThumbnail]=useState(false);
    const [isBtnImage,setBtnImage]=useState(false);
    const [imagePreview,setImagePreview]=useState("");
    const addedprod=()=>{
        // console.log("produyct is added");
        toast("Product added succesfully")}
        
    const submitdata =  () => {
      fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                price: price,
                discountPercentage: discount,
                discription: discription,
                stock: stock,
                images: [image],
                rating: rating,
                thumbnail: thumbnail

                /* other product data */
            })
        })
            .then(res => res.json())
            .then(
                addedprod(),
                 navigate('/product'),
                
                );   
    }
    const openPreview=()=>{
        setIsThumbnail(true);
        setIsImage(false);
    }
    const closePreview=()=>{
        // console.log("clicked");
        setIsThumbnail(false);
    }

    const handleThumbnailChange = (e) => {
            setThumbnail(e.target.files[0]);
            setThumbnailPreview(URL.createObjectURL(e.target.files[0]));
            setBtnThumbnail(true);
    };
    const openImage = () => {
        setIsImage(true);
        setIsThumbnail(false)
    }
    const closeImage = () => {
        // console.log("clicked");
        setIsImage(false);
    }
   const handleImageChange=(e)=>{
        setImage(e.target.files[0]);
       setImagePreview(URL.createObjectURL(e.target.files[0]));
       setBtnImage(true);
    }
   
const closehandler=()=>navigate('/product');

useEffect(()=>{
    if(id){
        /* updating title of product with id 1 */
        fetch(`https://dummyjson.com/products/${id}`, {
            // method: 'PUT', /* or PATCH */
            // headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({
            //     // title: 'iPhone Galaxy +1'
            //     title:title
            // })
        })
            .then(res => res.json())
            .then(data=>{
                setTitle(data.title);
                setPrice(data.price);
                setDiscount(data.discountPercentage);;
                setStock(data.stock);
                setRating(data.rating);
                setThumbnail(data.thumbnail);
                setThumbnailPreview(data.thumbnail);
            });
    }
},[id])
    return (
        <div id='addproduct' className='addproduct' >
            <span className='close'><IoIosClose onClick={closehandler}/></span>
            <form action="">
                <div className='title'>
                    <label htmlFor="">Product Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className='discription'>
                    <label htmlFor="">Discription</label>
                    <input type="text" value={discription} onChange={e => setDiscription(e.target.value)} />
                </div>
                <div className='price'>
                    <label htmlFor="">Price</label>
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <div className='discount'>
                    <label htmlFor="">Discount Percentage</label>
                    <input type="number" value={discount} onChange={e => setDiscount(e.target.value)} />
                </div>

                <div className='stock'>
                    <label htmlFor="">Stock</label>
                    <input type="number" value={stock} onChange={e => setStock(e.target.value)} />
                </div>
                <div className='rating'>
                    <label htmlFor="">Rating</label>
                    <input type="number" value={rating} onChange={e => setRating(e.target.value)} />
                </div>
                <div className='thumbnail'>
                    <label>Upload Thumbnail</label>
                    <input type="file" onChange={handleThumbnailChange} />
                    {isBtnPreview && <span onClick={openPreview} style={{ fontSize: '25px',cursor:'pointer' }}><MdPreview/></span>}
                    {isThumbnail && (
                        <div className='imagepreview'>
                            <div className='closeimage'  onClick={closePreview}><IoIosClose /></div>
                            <div> <img src={thumbnailPreview} alt="thumbnail preview" style={{ width: '180px', height: '180px', border: 'inset' }} />
                        </div>
                        </div>
                    )}
                </div>
                <div className='image'>
                    <label>Upload Images</label>
                    <input type="file" onChange={handleImageChange} />
                    {isBtnImage && <span onClick={openImage} style={{ fontSize: '25px', cursor: 'pointer' }}><MdPreview /></span>}
                    {isImage && (
                        <div className='imagepreview' >
                            <div className='closeimage' onClick={closeImage}><IoIosClose /></div>
                            <div> <img src={imagePreview} alt="thumbnail preview" style={{ width: '180px', height: '180px', border: 'inset' }} />
                            </div>
                        </div>
                    )}
                </div>
            </form>
            <button onClick={submitdata}>submit</button>
            {/* <Toaster/> */}
            <ToastContainer />
        </div>
    )
}

export default Addproduct