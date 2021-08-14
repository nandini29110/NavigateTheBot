import React, {useState} from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import "./NavbarReact.css"
import Logo from "../images/bot.png";
import LogoText from "../images/logo-text.png";

function NavbarReact(props){
  const [algorithm,setAlgorithm]=useState("");
  const handleSelect = (eventKey) =>{
    if(eventKey==="dijkstra"){
      setAlgorithm("dijkstra");
      document.getElementById("navigateUsingAlgo").innerHTML="Navigate using Dijkstra";
    }
  } 
    return(
      <>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"></link>   
      <Navbar variant="dark" className="navbar-custom-color navbar-text navbar-padding-corrected" expand="lg">
        <Container>
          <Navbar.Brand className="text-white" href="#home">
                <img
              src={Logo}
              width="40"
              height="40"
              className="logo-photo"
              alt="logo"
            />
            <img
              src={LogoText}
              width="200"
              height="30"
              className="logo-text"
              alt="logo"
            />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" onSelect={handleSelect}>
                
            <NavDropdown title={<span className="text-white">Algorithms</span>} className="basic-nav-dropdown left-link-items-style">
                <NavDropdown.Item eventKey="dijkstra" >Dijkstra's Algorithm</NavDropdown.Item>
                <NavDropdown.Item eventKey="astar" >Astar algo</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#speed" className="text-white left-link-items-style">Speed</Nav.Link>
              <script type="text/javascript" src="../NavigateBot/NavigateBot.jsx"></script>
              <button  id="navigateUsingAlgo" className="navigate-button" onClick={ ()=> algorithm==="dijkstra" ? `${props.visualizeDijkstra()}`:null} >Let's Navigate</button>
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