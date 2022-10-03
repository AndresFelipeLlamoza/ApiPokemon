import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsApp from '../components/CardsApp'

const CardsProps = (props) => {
  return (
    <>
    <Card style={{backgroundColor: '#FF2E2E', borderRadius: '50px 0px ', textAlign: 'center', color: 'white'}}>
    
      <Card.Img style={{ borderRadius: '50px 0px ' }} variant="top" src={props.img} />
      <Card.Body>
        <Card.Title style={{fontFamily: 'PokemonGB', fontSize: '16px'}} >{props.titulo} </Card.Title>
        <Card.Text>
          {props.texto}
        </Card.Text>
        <center><Button variant="primary">Ver mas</Button></center>
      </Card.Body>
    </Card></>
  );
}

export default CardsProps;