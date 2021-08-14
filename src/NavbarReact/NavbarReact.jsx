import { Nav, Navbar,NavDropdown,Container } from 'react-bootstrap';
import React from 'react';
import "./NavbarReact.css";
import logo from "../Images/bot.png";

function NavbarReact(){
    return (
      <Navbar className="navbar-custom-color" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src={logo} width="45" height="45"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"><h4 className="navTextColor">Home</h4></Nav.Link>
        <Nav.Link href="#link"><h4 className="navTextColor">Link</h4></Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};


export default NavbarReact;
