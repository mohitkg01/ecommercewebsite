import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import '../styles/Cards.css'
const Cards = (props) => {
   console.log(props.data);
  return (
    
    <Card key={props.data.id} className='cardmain'>
      <Card.Img variant="top" src={props.data.thumbnail} style={{width:'10rem', height:'5rem',borderRadius:'5px', marginTop:'8px'}} />
       <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card>
          Price: {props.data.price}
        </Card>
        {/* <Card.Text>
          {props.data.description}
         </Card.Text> */}
         
        {/* <Card.Img src={props.data.thumbnail} style={{ width: '10rem' }} /> */}
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card> 
  )
}

export default Cards