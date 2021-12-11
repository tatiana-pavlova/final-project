import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function PokemonInfo(props) {

  return (
    <Container>
      <Row>
        <Col md={7}>
          <img src={props.card.picture} alt={`Pokemon ${props.card.name}`} height={500} />
        </Col>
        <Col md={5}>
          <h1>{props.card.name}</h1>
          <p>ID: {props.card.id}</p>
          <p>Weight: {props.card.weight}</p>
          <Row>
            <Col md={6}>
              <h4>Abilities:</h4>
              <ul>
                {props.card.abilities.map((ability, index) => {
                  return (<li key={index + 1}>{ability.ability.name}</li>);
                })}
              </ul>
            </Col>
            <Col md={6}>
              <h4>Types:</h4>
              <ul>
                {props.card.types.map((type, index) => {
                  return (<li key={index +1}>{type.type.name}</li>);
                })}
              </ul>    
            </Col>
            <p><span>Current Status:</span> {props.card.catchStatus.status ? `caught ${props.card.catchStatus.date}` : 'uncaught' }</p>
          </Row>
          
        </Col>
      </Row>
    </Container>
  )
}