import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../styles/Cards.css'
// import Productdetail from '../pages/Productdetail';
import { useNavigate } from 'react-router-dom';


const Cards = (props) => {
  //  console.log(props.data);
  
const navigate=useNavigate();
 
  const callProduct=()=>{
    navigate(`/product/productdetails/${props.data.id}`);
  }
  return (
   
    <Card key={props.id} onClick={callProduct} className="cardmain">
      <Card.Img variant="top" src={props.data.thumbnail} style={{width:'10rem', height:'5rem',borderRadius:'5px', marginTop:'8px'}} />
       <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card>
          Price: {props.data.price}
        </Card>
         <Button  className="btn-card" variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
    
  )
}

export default Cards