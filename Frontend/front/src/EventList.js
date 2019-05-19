import React, {Component} from 'react';
import {getEvents} from './DataFetcher.js';
import NavBar from './NavBar.js';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventData: null
        };
    }
    componentDidMount() {
        getEvents((data) => this.setState({eventData: data}));
    }
    getEventComponent(event) { //TODO: Make this not disgusting
        return (
        
        <div key={event.id}>
        <MDBRow>
            <MDBCol style={{ maxWidth: "22rem" }}>
                <MDBCard wide>
                <MDBCardImage className="view view-cascade gradient-card-header peach-gradient" cascade tag="div">
                    <h2 className="h2-responsive mb-2">{event.name}</h2>
                    <p className="">
                    <MDBIcon icon="calendar-alt" /> {event.date}</p>
                </MDBCardImage>
                <MDBCardBody cascade>
                    <MDBCardText>{event.description}</MDBCardText>
                    <MDBCardText>Organized by: {event.organization}</MDBCardText>
                    <MDBCardText>Address: {event.address}</MDBCardText>
                    <MDBBtn href="#">View Event</MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
        </div>
        );
    }
    render() {
        const {eventData} = this.state;
        if(!eventData) return <div>Loading...</div>; //TODO: make a loading page, probably make it Loading.js so it can be used everywhere
        return (
          <div>
              {eventData.map(event => this.getEventComponent(event))}
          </div>
        );
      }
}

export default EventList;