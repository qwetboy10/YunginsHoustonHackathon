import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {getEventByID, getPersonByEventID} from './DataFetcher.js';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import stockeventpic from './volunteer.jpeg'
import { Jumbotron } from 'react-bootstrap';
class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      event: null,
      people: []
    };
  }
  componentDidMount() {
    var eventID = this.props.location.search.substring(10);
    getEventByID(eventID, this.loadData.bind(this));
    getPersonByEventID(eventID, this.addPerson.bind(this));
  }
  loadData(data) {
    this.setState({event: data, loading: false});
  }
  addPerson(person) {
    this.setState(prevState => ({
      people: [...prevState.people, person]
    }));
  }
    render() {
      
        return (
          <div>
            <Jumbotron>
            <MDBRow>
                <MDBCol style={{ maxWidth: "40rem" }}>
                    <MDBCard reverse>
                    <MDBCardImage cascade style={{ width: '40rem' }} src={stockeventpic} />
                    <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>My adventure</MDBCardTitle>
                        <h5 className="indigo-text"><strong>Event Name</strong></h5>
                        <MDBCardText>Full Description</MDBCardText>
                        <a href="#!" className="icons-sm li-ic ml-1">
                        <MDBIcon fab icon="linkedin-in" /></a>
                        <a href="#!" className="icons-sm tw-ic ml-1">
                        <MDBIcon fab icon="twitter" /></a>
                        <a href="#!" className="icons-sm fb-ic ml-1">
                        <MDBIcon fab icon="facebook-f" /></a>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            </Jumbotron>
            
        </div>
        );
      
    }
}

export default template;