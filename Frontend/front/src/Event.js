import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {getEventByID, getOrganizersByEventID, getVolunteersByEventID, getPersonByID, signUpEvent, unSignUpEvent} from './DataFetcher.js';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';
import stockeventpic from './volunteer.jpeg'
import { Jumbotron } from 'react-bootstrap';
import Cookies from 'universal-cookie';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 2,
      loaded: 0,
      event: null,
      people: [],
      volunteers: [],
      organizers: [],
      user: null,
      notLoggedIn: false
    };
  }
  componentDidMount() {
    this.setState({
      loading: 2,
      loaded: 0,
      event: null,
      people: [],
      volunteers: [],
      organizers: [],
      user: null,
      notLoggedIn: false
    });
    var eventID = this.props.location.search.substring(10);
    getEventByID(eventID, this.loadData.bind(this));
    getOrganizersByEventID(eventID, this.addVolunteer.bind(this));
    getVolunteersByEventID(eventID, this.addOrganizer.bind(this));
    var userID = new Cookies().get("user");
    if(userID === undefined) this.setState({notLoggedIn: true, loading: 1});
    else getPersonByID(userID, this.loadUser.bind(this));
  }
  loadUser(data) {
    this.setState(prevState => ({
      loaded: prevState.loaded+1,
      user: data
    }));
  }
  loadData(data) {
    this.setState(prevState => ({
      loaded: prevState.loaded+1,
      event: data
    }));
  }
  addVolunteer(person) {
    this.setState(prevState => ({
      people: [...prevState.people, person.id],
      volunteers: [...prevState.volunteers, person.id]
    }));
  }
  addOrganizer(person) {
    this.setState(prevState => ({
      people: [...prevState.people, person.id],
      organizers: [...prevState.organizers, person.id]
    }));
  }
  signUp() {
    const {event, user, people} = this.state;
    signUpEvent(event.id, people, user.id, this.componentDidMount.bind(this), () => alert("Sorry, an error occured."));
  }
  unSignUp() {
    const {event, user, people} = this.state;
    unSignUpEvent(event.id, people, user.id, this.componentDidMount.bind(this), () => alert("Sorry, an error occured."));
  }
  goToLogin() {
    this.props.history.push('/login');
  }
    render() {
      const {loading, loaded, event, people, user, notLoggedIn} = this.state;
      console.log(this.state);
      if(loading !== loaded) return <div>Loading...</div>; //TODO; pretty
        return ( //TODO: display info about event and people
          //Create a signup button too and then tell Steven once ur done
          <div>
            <Jumbotron>
            <MDBRow>
                <MDBCol col={10}>
                    <MDBCardImage cascade style={{ width: '40rem' }} src={stockeventpic} />
                    <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>{event.name}</MDBCardTitle>
                        <h5 className="indigo-text"><strong>{event.organization}</strong></h5>
                        <MDBCardText>{event.description}</MDBCardText>
                        {//TODO: make this not ass
                          notLoggedIn ? <MDBBtn onClick={this.goToLogin.bind(this)}>Log in to do thingys</MDBBtn> :
                          people.filter(person => person === user.id).length > 0 ? <MDBBtn onClick={this.unSignUp.bind(this)}>Unsign up</MDBBtn> 
                          : <MDBBtn onClick={this.signUp.bind(this)}>Sign up</MDBBtn>
                        }
                    </MDBCardBody>
                </MDBCol>
            </MDBRow>
            </Jumbotron>
        </div>
        );
      
    }
}

export default Event;