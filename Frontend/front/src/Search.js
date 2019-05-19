import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container, Form} from 'react-bootstrap';

class Search extends Component {
    render() {
        return (
          <div>
            <Jumbotron fluid>
            <Container>
                <h1>Search</h1>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="keyWords" placeholder="key words" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Sort by</Form.Label>
                    <Form.Control as="select">
                    <option>Alphabetical</option>
                    <option>Date</option>
                    <option>Location</option>
                    <option>Tags</option>
                    <option>Openings</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Sort by</Form.Label>
                    <Form.Control as="select" multiple>
                    <option>Alphabetical</option>
                    <option>Date</option>
                    <option>Location</option>
                    <option>Tags</option>
                    <option>Openings</option>
                    </Form.Control>
                </Form.Group>
                </Form>
            </Container>
            </Jumbotron>
          </div>
        );
      }
}

export default Search;