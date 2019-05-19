import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container, Form} from 'react-bootstrap';
import Datetime from 'react-datetime';
import './react-datetime.css';
import { MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow,MDBCardHeader, MDBInput, MDBIcon, MDBBtn, MDBModalFooter} from "mdbreact";
import {searchEvents} from './DataFetcher.js';
class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        date: new Date(),
        sort: null
      };
    }
    onChange(val, key) {
      console.log(key);
      console.log(val);
      this.setState({
        [key]: val
      });
    } 
    render() {
    const {name, date, sort} = this.state;
        return (
          <div>
            <Jumbotron fluid>
            <Container>
                <h1>Search</h1>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control id="keywords" type="keyWords" placeholder="Key Words" value={name} onChange={(e) => this.onChange(e.target.value, "name")}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Sort by</Form.Label>
                    <Form.Control as="select" value={sort} onChange={(e) => this.onChange(e.target.value, "sort")}>
                    <option>Alphabetical</option>
                    <option>Date</option>
                    <option>Location</option>
                    <option>Tags</option>
                    <option>Openings</option>
                    </Form.Control>
                </Form.Group>
                <Datetime value={date} onChange={(e) => this.onChange(e._d, "date")}/>
                
                </Form>
            </Container>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <MDBBtn onClick={() => (searchEvents(name, this.props.history, {after: date, sort: sort}))}>Submit</MDBBtn>
            </Jumbotron>
          </div>
        );
      }
}

export default Search;