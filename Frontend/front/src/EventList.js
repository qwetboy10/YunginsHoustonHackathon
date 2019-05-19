import React, {Component} from 'react';
import {getEvents} from './DataFetcher.js';
import NavBar from './NavBar.js';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';
import './EventList.css';

class EventList extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            eventData: null
        };
    }
    componentDidMount() {
        getEvents(this.props.location.search, (data) => this.setState({eventData: data}));
    }
    getEventComponent(event) { //TODO: Make this not disgusting
        return (
        
        <div key={event.id}>
        <br/><br/>
        <MDBCol bottom style={{ maxWidth: "50rem" }} >
                    <MDBCard wide display="inline">
                    <MDBCardImage className="view view-cascade gradient-card-header blue-gradient" cascade tag="div">
                        <h2  center="true" className="h2-responsive mb-2">{event.name}</h2>
                        <p className=""> <MDBIcon icon="calendar-alt" /> {event.date}</p>
                    </MDBCardImage>
                    <MDBCardBody cascade>
                        <MDBCardText>{event.description}</MDBCardText>
                        <MDBCardText>Organized by: {event.organization}</MDBCardText>
                        <MDBCardText>Address: {event.address}</MDBCardText>
                        <p>
                        <MDBBtn color="primary" href="#">View Event</MDBBtn>
                        </p>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
        
        </div>
        );
    }
    render() {
        const {eventData} = this.state;
        if(!eventData) return <div>Loading...</div>; //TODO: make a loading page, probably make it Loading.js so it can be used everywhere
        return (
          <div> 
            <MDBContainer className="event">
                <MDBRow center>
                    
                    {eventData.map(event => this.getEventComponent(event))}
                
                 </MDBRow>
                 
             </MDBContainer>
          </div>
        );
      }
}

export default EventList;