import React from "react";
import { Container } from "react-bootstrap";


export default function Footer() {
  return (
    <Container fluid style={{backgroundColor: '#212529', color: '#fff'}}>
    <Container style={{display: 'flex', justifyContent: 'end', padding: '10px'}}>
      <p>&copy; Tatiana Pavlova 2021</p>
    </Container>
  </Container>
  )
}
