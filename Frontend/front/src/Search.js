import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container, Form} from 'react-bootstrap';
import Datetime from 'react-datetime';
import './react-datetime.css';
import { MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow,MDBCardHeader, MDBInput, MDBIcon, MDBBtn, MDBModalFooter} from "mdbreact";
import {searchEvents} from './DataFetcher.js';
class Search extends Component {
  
    render() {
    var date = new Date();
        return (
          <div>
            <Jumbotron fluid>
            <Container>
                <h1>Search</h1>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control id="keywords" type="keyWords" placeholder="Key Words" />
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
            <MDBBtn onClick={() => (searchEvents(document.getElementById("keywords").innerHTML, this.props, {after: date}))}>Submit</MDBBtn>
            </Jumbotron>
          </div>
        );
      }
}

export default Search;