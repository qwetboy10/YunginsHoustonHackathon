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
        this.state = {orgID: null};
    }
    componentDidMount() {
        getPersonByID(new Cookies().get("user"), (data) => getOrganizationByID(data.organization, (org) => this.setState({orgID : org.id})));
    }
    onClick() {
        const {orgID, eventAddress, eventName, eventDate, eventDuration, eventBlurb, eventDesc } = this.state;
        createEvent(orgID,eventAddress, eventName, eventDate, eventDuration, eventBlurb, eventDesc, (id) => this.props.history.push('/event/?=event_id=' + id));
    }
    render() {
      
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
                                    value=""
                                />
                                <MDBInput
                                    label="Location"
                                    icon="map-marker-alt"
                                    group
                                    type="text"
                                    validate
                                    value=""
                                />
                             
                              <MDBInput
                                  label="Date"
                                  icon="calendar"
                                  group
                                  type="email"
                                  validate
                                  value=""
                              />
                              <MDBInput
                                  label="Duration"
                                  icon="stopwatch"
                                  group
                                  type="text"
                                  validate
                                  value=""
                              />
                               <MDBInput
                                  label="Blurb"
                                  icon="clock"
                                  group
                                  type="text"
                                  validate
                                  value=""
                              />
                              <MDBInput
                                  label="Description"
                                  icon="pencil-alt"
                                  group
                                  validate
                                  value=""
                                  type="textarea"
                                  rows="5"

                              />
                              </div>
                              <div className="text-center py-4 mt-3">
                              <MDBBtn color="orange">
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