import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container} from 'react-bootstrap';

class Profile extends Component {
    render() {
        return (
          <div>
            <Jumbotron fluid>
            <Container>
                <h1>Profile</h1>
                <h3>Profile Picture</h3>
                <p>
                hi
                </p>
            </Container>
            </Jumbotron>;
          </div>
        );
      }
}

export default Profile;