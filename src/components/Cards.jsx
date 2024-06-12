import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../styles/Cards.css'
import 'react-confirm-alert/src/react-confirm-alert.css';
// import Productdetail from '../pages/Productdetail';
import { useNavigate } from 'react-router-dom';
import { add_To_Cart } from '../reduxContainer/action/Action';
import { useDispatch } from 'react-redux';
// import Deleteproduct from '../pages/delete/Deleteproduct';

const Cards = (props) => {
const navigate=useNavigate();
const dispatch=useDispatch();
  
  const callProduct=()=>{
    navigate(`/product/productdetails/${props.data.id}`);
  }
  const handleAddToCart=(e)=>{
    e.stopPropagation()
    // console.log(add_To_Cart(props));
    dispatch(add_To_Cart(props.data));
  
    // add_To_Cart(props)
    // console.log('clicked');
  }
  return (
    <>
        <Card onClick={callProduct} className="cardmain">
          <Card.Img variant="top" src={props.data.thumbnail} style={{ width: '10rem', height: '5rem', borderRadius: '5px', marginTop: '8px' }} />
          <Card.Body>
            <Card.Title>{props.data.title}</Card.Title>
            <Card>
              Price: {props.data.price}
            </Card>
            <Button className="btn-card" variant="primary" onClick={handleAddToCart}>Add to cart</Button>
          </Card.Body>
        </Card>
    </>
  )
}

export default Cards