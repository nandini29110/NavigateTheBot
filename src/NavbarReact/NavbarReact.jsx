import React from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import "./NavbarReact.css"
import Logo from "../images/bot.png";
import "../styles.css"

function NavbarReact(){
    return(
      <>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"></link>   
      <Navbar className="navbar-custom-color navbar-text" expand="lg">
        <Container>
          <Navbar.Brand className="text-white" href="#home">
                <img
              src={Logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="logo"
            />NAVIGATEBOT
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
            <NavDropdown title="Algorithms" className="text-white basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Dijkstra's Algorithm</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#speed" className="text-white">Speed</Nav.Link>
              <button>Let's Navigate</button>
              <Nav.Link href="#clear-board" className="text-white">CLEAR BOARD</Nav.Link>
              <Nav.Link href="#clear-path" className="text-white">CLEAR PATH</Nav.Link>
              <Nav.Link href="#clear-walls" className="text-white">CLEAR WALLS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <link
        rel="stylesheet"
        href="NavbarReact.css"
      />
      </Navbar>
    </>
    );

}

export default NavbarReact;


// https://www.linkpicture.com/q/Navigate-Bot-_1.svg"