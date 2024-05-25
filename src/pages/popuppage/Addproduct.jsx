import React, { useState, useEffect } from 'react'
import '../../styles/Addproduct.css'
import { useNavigate } from 'react-router-dom';
const Addproduct = () => {
    // const [id,setId]=useState();
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState([]);
    const [thumbnail, setThumbnail] = useState();
    const [discount, setDiscount] = useState();
    const [discription, setDiscription] = useState();
    const [stock, setStock] = useState();
    const [rating, setRating] = useState();
    const [data, setdata] = useState([]);

    // const [number,setNumber]=useState();
    const submitdata = async () => {
        // console.log(id);
        // console.log(title);
        await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                price: price,
                discountPercentage: discount,
                discription: discription,
                stock: stock,
                images: image,
                rating: rating,
                thumbnail: thumbnail

                /* other product data */
            })
        })
            .then(res => res.json())
            .then(console.log, navigate('/product'));
    }
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setdata(data))
    }, []);
    console.log(data);

    return (
        <div id='addproduct' className='addproduct' >
            <form action="">
                {/* <div>
                  <label htmlFor="">Product Id</label>
                  <input type="number"  value={id} onChange={e=>setId(e.target.value)}/>
            </div> */}

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
                    <label htmlFor="">Upload Thumbnail</label>
                    <input type="file" value={thumbnail} onChange={e => setThumbnail(e.target.value)} />
                </div>
                <div className='image'>
                    <label htmlFor="">Upload Image</label>
                    <input type="file" value={image} onChange={e => setImage(e.target.value)} />
                </div>
            </form>
            <button onClick={submitdata}>submit</button>
        </div>
    )
}

export default Addproduct