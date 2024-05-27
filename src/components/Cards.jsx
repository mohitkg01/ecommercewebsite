import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../styles/Cards.css'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
// import Productdetail from '../pages/Productdetail';
import { useNavigate, useParams } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const Cards = (props) => {
  //  console.log(props);
const navigate=useNavigate();
  
  const callProduct=()=>{
    navigate(`/product/productdetails/${props.data.id}`);
  }



  const deleteItem =async () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {fetch(`https://dummyjson.com/products/${props.data.id}`, {
            method: 'DELETE',
          })
            .then(res => res.json())
            .then(console.log);}
        },
        {
          label: 'No',
          onClick: () => alert('Deletrion cancel')
        }
      ]
    });
  
  };
  return (
    <>
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
      <span className='btnspan'><MdDelete onClick={deleteItem} /></span>
    </>
  )
}

export default Cards