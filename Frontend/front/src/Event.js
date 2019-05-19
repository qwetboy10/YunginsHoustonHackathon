import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {getEventByID, getOrganizersByEventID, getVolunteersByEventID, getPersonByID, signUpEvent, unSignUpEvent, deleteEvent} from './DataFetcher.js';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';
import {Carousel, Card, Container, Row, Col, Image, Figure, Button, Jumbotron} from 'react-bootstrap';
import stockeventpic from './volunteer.jpeg'
import Cookies from 'universal-cookie';
import Map from './Map.js';
import Loading from './Loading.js';

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
      volunteers: [...prevState.volunteers, person]
    }));
  }
  addOrganizer(person) {
    this.setState(prevState => ({
      people: [...prevState.people, person.id],
      organizers: [...prevState.organizers, person]
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
  doStuff(organizer) {
    return (
      <li>{organizer.first_name + " " + organizer.last_name}</li>
    );
  }
    render() {
      const {loading, loaded, event, people, user, notLoggedIn, organizers, volunteers} = this.state;
      console.log(this.state);
      if(loading !== loaded) return <div><Loading/></div>; //TODO; pretty
        return ( //TODO: display info about event and people
          //Create a signup button too and then tell Steven once ur done
          <div>
            <Jumbotron>
            <Card className="text-center">
              <Card.Header>
              <br/>
              <MDBRow>
                <MDBCol style={{ maxWidth: "35rem" }}>
                    <img cascade style={{ width: '30rem' }} src={stockeventpic} />
                </MDBCol>
                <MDBCol style={{ maxWidth: "50rem" }}>
                <br/><br/><br/><br/><br/><br/><br/>

                  <p style={{textAlign:"left",fontSize:60}}>
                   {event.name}
                  </p>
                  <h2 style={{textAlign:"left"}}>
                  Organized by: {event.organization}
                  </h2>
                </MDBCol>
                <MDBCol style={{ maxWidth: "40rem" }}>
                <p style={{textAlign:"left"}}>
                   Share this event with your friends and family!
                  </p>
                <a href="#!" className="fb-ic blue-text mr-3">
                  <MDBIcon fab icon="facebook-f" size="2x"/>
                </a>
                <a href="#!" className="tw-ic blue-text mr-3">
                  <MDBIcon fab icon="twitter" size="2x"/>
                </a>
                <a href="#!" className="ins-ic blue-text mr-3">
                  <MDBIcon fab icon="instagram" size="2x"/>
                </a>
                <a href="#!" className="email-ic blue-text mr-3">
                  <MDBIcon icon="envelope" size="2x"/>
                </a>
                </MDBCol>
              </MDBRow>
              <br/>
              </Card.Header>
            <Card.Body>
              <Card.Title><p style={{fontSize:35}}>Event Details</p></Card.Title>
              <Card.Text>
              <p style={{textAlign:"center",fontSize:20}}>
                {event.description}
                  </p>
              </Card.Text>
              <MDBRow>
                <MDBCol style={{ maxWidth: "40rem" }}>
                <h2 style={{textAlign:"center"}}>Location: {event.address}</h2> 
                  <Map/>
                </MDBCol>
                <MDBCol style={{ maxWidth: "40rem" }}>
                <h2 style={{textAlign:"center"}}>Organizers</h2>
                  <ul style={{textAlign:"center",listStyleType:"none"}}>
                  {organizers.map(this.doStuff)}
                  </ul>
                </MDBCol>
                <MDBCol style={{ maxWidth: "40rem" }}>
                <h2 style={{textAlign:"center"}}>Volunteers</h2>
                <ul style={{textAlign:"center",listStyleType:"none"}}>
                  {volunteers.map(this.doStuff)}
                  </ul>
                </MDBCol>
              </MDBRow>
              

              {notLoggedIn ? <MDBBtn onClick={this.goToLogin.bind(this)}>Log in to do thingys</MDBBtn> :
                          people.filter(person => person === user.id).length > 0 ? <MDBBtn onClick={this.unSignUp.bind(this)}>Unregister</MDBBtn> 
                          : <MDBBtn onClick={this.signUp.bind(this)}>Register</MDBBtn>}
            </Card.Body>
          </Card>
              {organizers.map(organizer => organizer.id).includes(user.id) && <MDBBtn onClick={() => deleteEvent(event.id, () => this.props.history.push("/"))}>DELETE EVENT</MDBBtn>}
            <MDBRow>
                <MDBCol style={{ maxWidth: "40rem" }}>
                
                </MDBCol>
                <MDBCol style={{ maxWidth: "40rem" }}>
                    
                </MDBCol>
                <MDBCol> 

                </MDBCol>
                <MDBCol col={5}>
                </MDBCol>
                
            </MDBRow>
              <MDBRow>
                  <MDBCol> 
                    
                  </MDBCol>
                  <MDBCol col={5}>
                  
                  
                  </MDBCol>
              </MDBRow>
            </Jumbotron>
        </div>
        );
      
    }
    
}


export default Event;
