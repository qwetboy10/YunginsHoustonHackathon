import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button, Popover, OverlayTrigger} from 'react-bootstrap';
import { MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow,MDBCardHeader, MDBIcon, MDBBtn, MDBModalFooter,MDBInput} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class Signup extends Component {
    onClick() {
        alert("Moog");
    }
    render() {
      
        return (
          <div>
              <br/>
              <br/>
              <MDBContainer>
                <MDBRow center>
                    <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                        <form>
                            <p className="h4 text-center py-4">Sign up</p>
                            <div className="grey-text">
                            <MDBInput
                                label="Your name"
                                icon="user"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Your email"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Confirm your email"
                                icon="exclamation-triangle"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Your password"
                                icon="lock"
                                group
                                type="password"
                                validate
                            />
                            </div>
                            <div className="text-center py-4 mt-3">
                            <MDBBtn color="orange" type="submit">
                                Register
                            </MDBBtn>
                            </div>
                        </form>
                        </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
        );
      
    }
}

export default Signup;