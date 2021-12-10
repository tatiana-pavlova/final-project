import React from "react";
import { Card, Button, Col, } from "react-bootstrap";
// import testPhoto from '../testPhoto.jpg';

export default function PokemonCard(props) {

  function handleClick() {
    props.onCardClick(props.card);
    console.log(props.card);
  }
  
  return (
    <Col>
      <Card onClick={handleClick} style={{width: '270px', margin: '20px 10px'}}>
        <Card.Img variant='top' src={props.card.picture} alt='Pokemon Picture' />
        <Card.Body>
          <Card.Title>{props.card.name}</Card.Title>
          <Card.Text>ID: {props.card.id}</Card.Text>
          <Button variant='primary'>Catch</Button>
        </Card.Body>
      </Card>
    </Col>
  );  
}
