import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow,MDBCardHeader, MDBInput, MDBIcon, MDBBtn, MDBModalFooter} from "mdbreact";

import { createEvent, getPersonByID, getOrganizationByID } from './DataFetcher';
import Cookies from 'universal-cookie';
class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {orgID: null,
             eventAddress: null, 
             eventName: null, 
             eventDate: null, 
             eventDuration: null, 
             eventBlurb: null, 
             eventDesc: null };
    }
    componentDidMount() {
        getPersonByID(new Cookies().get("user"), (data) =>  {
            this.setState({orgID : data.organization.id})});
    }
    onClick() {
        const {orgID, eventAddress, eventName, eventDate, eventDuration, eventBlurb, eventDesc } = this.state;
        createEvent(orgID,eventAddress, eventName, eventDate, eventDuration, eventBlurb, eventDesc, (id) => this.props.history.push('/event/?event_id=' + id));
    }
    onChange(value, key) {
        this.setState({
            [key]: value
        });
    }
    render() {
        const {eventAddress, eventName, eventDate, eventDuration, eventBlurb, eventDesc } = this.state;
        return (
          <div>
            <MDBContainer>
                  <MDBRow center>
                      <MDBCol md="6">
                      <MDBCard>
                          <MDBCardBody>
                          <form>
                              <p className="h4 text-center py-4">Event Sign up</p>
                              <div className="grey-text">
                                <MDBInput
                                    label="Name of Event"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    value={eventName}
                                    onChange={(e) => this.onChange(e.target.value, "eventName")}
                                />
                                <MDBInput
                                    label="Location"
                                    icon="map-marker-alt"
                                    group
                                    type="text"
                                    validate
                                    value={eventAddress}
                                    onChange={(e) => this.onChange(e.target.value, "eventAddress")}
                                />
                             
                              <MDBInput
                                  label="Date"
                                  icon="calendar"
                                  group
                                  type="email"
                                  validate
                                  value={eventDate}
                                  onChange={(e) => this.onChange(e.target.value, "eventDate")}
                              />
                              <MDBInput
                                  label="Duration"
                                  icon="stopwatch"
                                  group
                                  type="text"
                                  validate
                                  value={eventDuration}
                                  onChange={(e) => this.onChange(e.target.value, "eventDuration")}
                              />
                               <MDBInput
                                  label="Blurb"
                                  icon="clock"
                                  group
                                  type="text"
                                  validate
                                  value={eventBlurb}
                                  onChange={(e) => this.onChange(e.target.value, "eventBlurb")}
                              />
                              <MDBInput
                                  label="Description"
                                  icon="pencil-alt"
                                  group
                                  validate
                                  value={eventDesc}
                                  onChange={(e) => this.onChange(e.target.value, "eventDesc")}
                                  type="textarea"
                                  rows="5"

                              />
                              </div>
                              <div className="text-center py-4 mt-3">
                              <MDBBtn color="orange" onClick={() => this.onClick()}>
                                  Register
                              </MDBBtn>
                              </div>
                          </form>
                          </MDBCardBody>
                      </MDBCard>
                      </MDBCol>
                  </MDBRow>
              </MDBContainer>
        </div>
        );
      
    }
}

export default CreateEvent;