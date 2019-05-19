import React, {Component} from 'react';
import {getEvents} from './DataFetcher.js';
import NavBar from './NavBar.js';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';
import './EventList.css';

class EventList extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            eventData: [{
                name: "Event Name",
                date: "Date",
                id: 1,
                description: "Lorem ipsum dolor sit amet, eos ad tempor indoctum conceptam, sed te eruditi consectetuer comprehensam, id vis vide propriae periculis. Vix ea primis explicari consequuntur. Rebum iudico gloriatur eum cu. Ei doming consequuntur pri, dicam inciderint ei sea."
            }]
        };
    }
    componentDidMount() {
        getEvents((data) => this.setState({eventData: data}));
    }
    getEventComponent(event) { //TODO: Make this not disgusting
        return (
        
        <div key={event.id}>
        <br/><br/>
        <MDBContainer className="event">
            <MDBRow center>
                <MDBCol bottom style={{ maxWidth: "50   rem" }} >
                    <MDBCard wide display="inline">
                    <MDBCardImage className="view view-cascade gradient-card-header blue-gradient" cascade tag="div">
                        <h2  center="true" className="h2-responsive mb-2">{event.name}</h2>
                        <p className=""> <MDBIcon icon="calendar-alt" /> {event.date}</p>
                    </MDBCardImage>
                    <MDBCardBody cascade>
                        <MDBCardText>{event.description}</MDBCardText>
                        <MDBCardText>Organized by: {event.organization}</MDBCardText>
                        <MDBCardText>Address: {event.address}</MDBCardText>
                        <MDBBtn color="primary" href="#">View Event</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol bottom style={{ maxWidth: "50 rem" }} >
                    <MDBCard wide display="inline">
                    <MDBCardImage className="view view-cascade gradient-card-header purple-gradient" cascade tag="div">
                        <h2  center="true" className="h2-responsive mb-2">{event.name}</h2>
                        <p className=""> <MDBIcon icon="calendar-alt" /> {event.date}</p>
                    </MDBCardImage>
                    <MDBCardBody cascade>
                        <MDBCardText>{event.description}</MDBCardText>
                        <MDBCardText>Organized by: {event.organization}</MDBCardText>
                        <MDBCardText>Address: {event.address}</MDBCardText>
                        <MDBBtn color="primary" href="#">View Event</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol bottom style={{ maxWidth: "50   rem" }} >
                    <MDBCard wide display="inline">
                    <MDBCardImage className="view view-cascade gradient-card-header peach-gradient" cascade tag="div">
                        <h2  center="true" className="h2-responsive mb-2">{event.name}</h2>
                        <p className=""> <MDBIcon icon="calendar-alt" /> {event.date}</p>
                    </MDBCardImage>
                    <MDBCardBody cascade>
                        <MDBCardText>{event.description}</MDBCardText>
                        <MDBCardText>Organized by: {event.organization}</MDBCardText>
                        <MDBCardText>Address: {event.address}</MDBCardText>
                        <MDBBtn color="primary" href="#">View Event</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
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