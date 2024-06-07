import React, { useEffect, useState} from 'react'
import '../../styles/Addproduct.css'
import { useNavigate, useParams } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";
import { toast } from 'react-toastify';
import { MdPreview } from "react-icons/md";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validationSchema = Yup.object({
    name: Yup.string()
        .required('Title is required')
        .min(4, 'Title must be at least 4 characters'),
    price: Yup.number()
        .required('Price is required'),
    discount: Yup.number()
        .required('Discount is required'),
    stock: Yup.number()
        .required('Stock is required'),
    rating: Yup.number()
        .required('Rating is required')
});
const Addproduct = () => {
    const {id}=useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState([]);
    const [thumbnail, setThumbnail] = useState();
    const [discount, setDiscount] = useState();
    const [stock, setStock] = useState();
    const [rating, setRating] = useState();
    const [isThumbnail, setIsThumbnail]=useState(false);
    const [isImage,setIsImage]=useState(false);
    const [thumbnailPreview, setThumbnailPreview] = useState("");
    const [isBtnPreview,setBtnThumbnail]=useState(false);
    const [isBtnImage,setBtnImage]=useState(false);
    const [imagePreview,setImagePreview]=useState("");

    const submitdata =  (values) => {
      fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: values.title,
                price: values.price,
                discountPercentage: discount,
                // discription: discription,
                stock: stock,
                images: [image],
                rating: rating,
                thumbnail: thumbnail

                /* other product data */
            })
        })
            .then(res => res.json())
            .then(
                toast.success("Product added succesfully", {
                    position: "top-center"
                }),
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
        <Formik 
            initialValues={{ name: title, price: price , stock:stock , discount:discount,rating:rating}}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={submitdata}>
    {({ isSubmitting }) => (
        <div id='addproduct' className='addproduct' >
            <span className='close'><IoIosClose onClick={closehandler}/></span>
                <Form>
                    <div className='title'>
                        <label htmlFor="name">Product Title</label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div className='price'>
                    <label htmlFor="price">Price</label>
                    <Field type="number" name="price" />
                    <ErrorMessage name="price" component="div" />
                    </div>
                    <div className='discount'>
                        <label htmlFor="">Discount Percentage</label>
                            <Field type="number" name="discount" />
                        <ErrorMessage name="discount" component="div" />
                    </div>
                    <div className='stock'>
                        <label htmlFor="">Stock</label>
                            <Field type="number" name="stock" />
                        <ErrorMessage name="stock" component="div" />
                    </div>
                    <div className='rating'>
                        <label htmlFor="">Rating</label>
                            <Field type="number" name="rating" />
                        <ErrorMessage name="rating" component="div" />
                    </div>
                {/*

                <div className='stock'>
                    <label htmlFor="">Stock</label>
                    <input type="number" value={stock} onChange={e => setStock(e.target.value)} />
                </div>
                <div className='rating'>
                    <label htmlFor="">Rating</label>
                    <input type="number" value={rating} onChange={e => setRating(e.target.value)} />
                </div> */}
                <div className='thumbnail'>
                    <label>Upload Thumbnail</label>
                    <input type="file" onChange={handleThumbnailChange} />
                    {isBtnPreview && <span onClick={openPreview} style={{ fontSize: '25px', cursor: 'pointer' }}><MdPreview /></span>}
                    {isThumbnail && (
                        <div className='imagepreview'>
                            <div className='closeimage' onClick={closePreview}><IoIosClose /></div>
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
                 <button type="submit" disabled={isSubmitting}>Submit </button>
                    </Form>
                </div>
               )}
        </Formik>
    )
}

export default Addproduct