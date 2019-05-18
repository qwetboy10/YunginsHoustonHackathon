import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button, Popover, OverlayTrigger} from 'react-bootstrap';
import { MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow,MDBCardHeader, MDBIcon, MDBBtn, MDBModalFooter} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class Login extends Component {
    onClick() {
        alert("Moog");
    }
    render() {
      
        return (
          <div>
        <MDBContainer>
         <MDBRow>
           <MDBCol md="6">
             <MDBCard>
               <MDBCardBody>
                 <MDBCardHeader className="form-header warm-flame-gradient rounded">
                   <h3 className="my-3">
                     <MDBIcon icon="lock" /> Login:
                   </h3>
                 </MDBCardHeader>
                 <label htmlFor="defaultFormEmailEx" className="grey-text font-weight-light">
                   Your email
                 </label>
                 <input type="email"
                   id="defaultFormEmailEx"
                   className="form-control"
                 />
                 <label htmlFor="defaultFormPasswordEx" className="grey-text font-weight-light">
                   Your password
                 </label>
                 <input
                   type="password"
                   id="defaultFormPasswordEx"
                   className="form-control"
                 />
                 <div className="text-center mt-4">
                   <MDBBtn color="deep-orange" className="mb-3" type="submit">
                     Login
                   </MDBBtn>
                 </div>
                 <MDBModalFooter>
                   <div className="font-weight-light">
                     <a>Not a member? </a><a href=""onClick={()=> this.props.history.push("/signup")}>Sign Up</a><br/>
                     <a href=""onClick={()=> this.props.history.push("/forgot")}>Forgot Password?</a>
                   </div>
                 </MDBModalFooter>
               </MDBCardBody>
             </MDBCard>
           </MDBCol>
         </MDBRow>
        </MDBContainer>
        </div>
        );
      
    }
}

export default Login;