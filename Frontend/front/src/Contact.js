import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container, Form, Button} from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
          <div>
            <Jumbotron fluid>
            <Container>
                <h1>Contact</h1>
                <h3>Questions, Suggestions, Feedback...</h3>
                <p>
                We really value the input of our users. Thank you for your time!
                </p>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Type</Form.Label>
                <Form.Control as="select">
                  <option>Question</option>
                  <option>Suggestions/Feedback</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Content</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </Container>
            </Jumbotron>
          </div>
        );
      }
}

export default Contact;