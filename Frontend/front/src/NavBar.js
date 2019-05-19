import React, {Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button, Popover, OverlayTrigger} from 'react-bootstrap';
import { MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow,MDBCardHeader, MDBIcon, MDBBtn, MDBModalFooter, MDBBadge} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { searchEvents } from './DataFetcher.js';
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    }
  }
    logout() {
        this.props.update();
    }
    onClick() {
      this.props.history.push(`events${searchEvents(this.state.searchQuery)}`);
    }
    onChange(s) {
      this.setState({
        searchQuery: s
      });
    }
    render() {
      const {user} = this.props;
      const {searchQuery} = this.state;
      return (<Navbar bg="white" expand="lg" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand><Nav.Link onClick={()=>this.props.history.push("/")}>Houston Volunteer Central</Nav.Link></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {["Events", "FAQ", "Rankings", "Contact", "Profile", "Advanced Search"].map((str) => (
              <Nav.Link onClick={() => this.props.history.push(`/${str.replace(/ /g, '_').toLowerCase().replace("home", "").replace("advanced_search", "search")}`)}>
                {str}
              </Nav.Link>
            ))}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchQuery} onChange={(e) => this.onChange(e.target.value)}/>
            <Button variant="primary" onClick={this.onClick.bind(this)}>Search</Button>
          </Form>
          {user ? <div>
            <MDBBtn onClick={() => this.props.history.push("/profile")}>{"Hello, " + user.first_name + "!"}</MDBBtn>
            <MDBBtn color="orange" onClick={() => this.logout()}>Logout</MDBBtn>
          </div>
            : <MDBBtn color="orange" onClick={() => this.props.history.push("/login")}>Login</MDBBtn>}
          
        </Navbar.Collapse>
        </Navbar>
        );
      
    }
}

export default NavBar;