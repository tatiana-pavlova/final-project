import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styles = styled.div`
  a {
    color: #adb1b8;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
`
export default function NaviBar() {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Pokedex</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item><Link to="/">Home</Link></Nav.Item>  
              {/* сделать марджины */}
              <Nav.Item><Link to="/pokemons">Caught Pokemons</Link></Nav.Item>
              {/* <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/pokemons">Caught Pokemons</Nav.Link> */}
              {/* <Link to="/">Home</Link>
              <Link to="/pokemons">Caught Pokemons</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  )
}
