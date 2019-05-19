import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container} from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';
import Map from './Map.js';

class FAQ extends Component {
    render() {
        return (
          <div>
            <Jumbotron fluid>
            <Container>
                <h1>FAQ</h1>
                <br/>
                <h3>Registration</h3>
                <p>
                  Signing up for an event is simple with HVC's intuitive user interface. Just input your skills and<br></br> interests, and HVC will allow an event organizer to
                  see if you are right for the job. Build up your <br></br>karma by performing well and meet new people along the way!
                </p>
                <h3>Security</h3>
                <p>
                  HVC has many measures to ensure that your personal information is secure. Also, we screen most <br></br>large events posted to the site to ensure that they
                  are safe.
                </p>
                <h3>Staff</h3>
                <p>
                  Our website is maintained fully by students who have large amounts of experience with web <br></br>developmentand coding. Since HVC is a non profit organization,
                  our staff volunteers their time to <br></br>make sure every event is as high quality as possible.
                </p>
                <Map />
            </Container>
            </Jumbotron>;
          </div>
        );
      }
}

export default FAQ;