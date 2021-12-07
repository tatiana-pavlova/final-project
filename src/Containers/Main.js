import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PokemonCard from "../Components/PokemonCard";

export default function Main() {
  return (
    <Container>
      <Row>
        <Col>
          <PokemonCard />  
        </Col>
      </Row>
    </Container>
  )
}