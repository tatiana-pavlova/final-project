import React from "react";
import { Card, Button } from "react-bootstrap";
import testPhoto from '../testPhoto.jpg';

export default function PokemonCard() {
  return (
    <Card style={{width: '300px', margin: '20px'}}>
      <Card.Img variant='top' src={testPhoto} />
      <Card.Body>
        <Card.Title>Pokemon Name</Card.Title>
        <Card.Text>Pokemon ID</Card.Text>
        <Button variant='primary'>Catch</Button>
      </Card.Body>
    </Card>
  );  
}
