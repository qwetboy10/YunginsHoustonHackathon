import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button, Popover, OverlayTrigger} from 'react-bootstrap';
import { MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow,MDBCardHeader, MDBIcon, MDBBtn, MDBModalFooter} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class Footer extends Component {
    onClick() {
        alert("Moog");
    }
    render() {
        return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand><Nav.Link onClick={() => this.props.history.push("/")}>Houston Volunteer Central</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {["Events", "FAQ", "Rankings", "Contact", "Profile", "Login"].map((str) => (
              <Nav.Link onClick={() => this.props.history.push(`/${str.replace(/ /g, '_').toLowerCase()}`)}>
                {str}
              </Nav.Link>
            ))}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="primary" onClick={this.onClick.bind(this)}>Search</Button>
          </Form>
          <MDBBtn color="orange">Login</MDBBtn>
          
        </Navbar.Collapse>
        </Navbar>
        );
      
    }
}

export default Footer;