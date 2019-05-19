import React, {Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
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
      const {user} = this.props;
      return (<Navbar bg="white" expand="lg" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand><Nav.Link onClick={()=>this.props.history.push("/")}>Houston Volunteer Central</Nav.Link></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {["Events", "FAQ", "Rankings", "Contact", "Profile"].map((str) => (
              <Nav.Link onClick={() => this.props.history.push(`/${str.replace(/ /g, '_').toLowerCase().replace("home", "")}`)}>
                {str}
              </Nav.Link>
            ))}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="primary" onClick={this.onClick.bind(this)}>Search</Button>
          </Form>
          {user ? user.first_name
            : <MDBBtn color="orange" onClick={() => this.props.history.push("/login")}>Login</MDBBtn>}
          
        </Navbar.Collapse>
        </Navbar>
        );
      
    }
}

export default NavBar;