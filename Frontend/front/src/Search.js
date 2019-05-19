import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container, Form} from 'react-bootstrap';
import { MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow,MDBCardHeader, MDBInput, MDBIcon, MDBBtn, MDBModalFooter} from "mdbreact";
import {searchEvents} from './DataFetcher.js';

import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';

class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        date: [new Date(), new Date()],
        sort: null
      };
      this.state.date[1].setDate(this.state.date[1].getDate() + 31);
    }
    onChange = date => this.setState({date})
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
                </Form>
            </Container>
            <div class="text-center">  </div>

            <br></br>
            <div class="text-center"> <DateTimeRangePicker onChange = {this.onChange} value={this.state.date}/> </div>
            <br></br>
            <div class="text-center"> <button onClick={() => (searchEvents(name, this.props.history, {before: date[1], after: date[0], sort: sort}))} type="button" class="btn btn-primary">Submit</button> </div>
            </Jumbotron>
          </div>
        );
      }
}

export default Search;