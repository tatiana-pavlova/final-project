import React from "react";
import { Container, Row } from "react-bootstrap";
import PokemonCard from "../Components/PokemonCard";

export default function Main(props) {

  return (
    <Container>
      <Row>
        {props.cards.map((card) => {
          // console.log(props.cards);
          // console.log(card);
          return (<PokemonCard key={card.id} card={card} onCardClick={props.onCardClick} /> )
        })}
      </Row>
    </Container>
  )
}
