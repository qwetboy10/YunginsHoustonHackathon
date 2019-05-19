import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container} from 'react-bootstrap';

class OrganizationPage extends Component {
    render() {
        return (
          <div>
            <Jumbotron fluid>
            <Container>
                <h1>Organization Page</h1>
                <br/>
                <h3>Registration</h3>
                <p>
                  something something something
                </p>
                <Map />
            </Container>
            </Jumbotron>;
          </div>
        );
      }
}

export default OrganizationPage;