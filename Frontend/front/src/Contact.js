import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container} from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
          <div>
            <Jumbotron fluid>
            <Container>
                <h1>FAQ</h1>
                <h3>Registration</h3>
                <p>
                hi
                </p>
                <h3>Security</h3>
                <p>
                yes
                </p>
                <h3>Staff</h3>
                <p>
                pizza
                </p>
            </Container>
            </Jumbotron>;
          </div>
        );
      }
}

export default Contact;