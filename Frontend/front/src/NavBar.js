import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button, Popover, OverlayTrigger} from 'react-bootstrap';
import { MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow,MDBCardHeader, MDBIcon, MDBBtn, MDBModalFooter} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class NavBar extends Component {
    onClick() {
        alert("Moog");
    }
    render() {
      
        return (
          <div>
        <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home">Houston Volunteer Central</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav.Link href="#rankings">Rankings</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="primary" onClick={this.onClick.bind(this)}>Search</Button>
          </Form>
          <MDBBtn color="orange">Login</MDBBtn>
          
        </Navbar.Collapse>
        </Navbar>
        </div>
        );
      
    }
}

export default NavBar;