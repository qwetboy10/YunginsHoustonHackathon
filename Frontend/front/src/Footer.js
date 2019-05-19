import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button, Popover, OverlayTrigger} from 'react-bootstrap';
import { MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow,MDBCardHeader, MDBIcon, MDBBtn, MDBModalFooter} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {Jumbotron, Container} from 'react-bootstrap';


class Footer extends Component {
    onClick() {
        alert("Moog");
    }
    render() {
        return (
          <Jumbotron fluid style={{backgroundColor:'#4185F4'}}>
          <Container>
              <p style={{color:"white"}}>© 2019 Houston Volunteer Central. Cypress Woods High School. All rights reserved. </p>
              <p style={{color:"white"}}>
              <MDBContainer>
          <a href="#!" className="fb-ic white-text mr-3">
            <MDBIcon fab icon="facebook-f" size="2x"/>
          </a>
          <a href="#!" className="tw-ic white-text mr-3">
            <MDBIcon fab icon="twitter" size="2x"/>
          </a>
          <a href="#!" className="ins-ic white-text mr-3">
            <MDBIcon fab icon="instagram" size="2x"/>
          </a>
          <a href="#!" className="yt-ic white-text mr-3">
            <MDBIcon fab icon="youtube" size="2x"/>
          </a>
          <a href="#!" className="email-ic white-text mr-3">
            <MDBIcon icon="envelope" size="2x"/>
          </a>
        </MDBContainer>
              </p>
          </Container>
          
          </Jumbotron>
        );
      
    }
}

export default Footer;
