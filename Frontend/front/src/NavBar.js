import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class NavBar extends Component {
    onClick() {
        alert("Moog");
    }
    render() {
        return <Navbar bg="light" expand="lg">
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
            <Button variant="outline-success" onClick={this.onClick.bind(this)}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>;
    }
}

export default NavBar;