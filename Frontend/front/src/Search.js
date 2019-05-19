import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container, Form} from 'react-bootstrap';
import Datetime from 'react-datetime';
import './react-datetime.css';
class Search extends Component {
  
    render() {
      var today = new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        return (
          <div>
            <Jumbotron fluid>
            <Container>
                <h1>Search</h1>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control type="keyWords" placeholder="Key Words" />
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
                <Datetime/>
                </Form>
            </Container>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </Jumbotron>
          </div>
        );
      }
}

export default Search;