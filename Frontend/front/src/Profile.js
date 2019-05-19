import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container} from 'react-bootstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';

class Profile extends Component {
    render() {
        const {user} = this.props;
        if(!user) return (
          <div>
            <br/>
            <MDBContainer>
            <MDBRow center>
                <MDBCol bottom style={{ maxWidth: "25rem" }} >
                    <MDBCard wide display="inline">
                    <MDBCardImage className="view view-cascade gradient-card-header peach-gradient" cascade tag="div">
                        <h2  center="true" className="h2-responsive mb-2">You are not logged in</h2>
                    </MDBCardImage>
                    <MDBCardBody cascade>
                        
                        <p>
                        <MDBBtn center="true" color="orange" onClick={() => this.props.history.push("/login")}>Please Click here to Login</MDBBtn>
                        </p>
                        
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                
            </MDBRow>
        </MDBContainer>
          </div>
        );
        return ( //TODO: add other things for user, console.log(user) for the things u can use
          <div>
            <Jumbotron fluid>
            <Container>
                <h1>Profile</h1>
                <h3>{user.first_name + " " + user.last_name}</h3>
            </Container>
            </Jumbotron>;
          </div>
        );
      }
}

export default Profile;