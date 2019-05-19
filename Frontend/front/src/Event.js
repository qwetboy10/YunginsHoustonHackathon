import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
<<<<<<< HEAD
import {getEventByID, getPersonByEventID, getPersonByID, signUpEvent, unSignUpEvent} from './DataFetcher.js';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer } from 'mdbreact';
=======
import {getEventByID, getOrganizersByEventID, getVolunteersByEventID, getPersonByID, signUpEvent, unSignUpEvent} from './DataFetcher.js';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';
>>>>>>> 922afbe56e038053e4db6fd0051f308569ab00af
import stockeventpic from './volunteer.jpeg'
import { Jumbotron } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import Map from './Map.js';

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
<<<<<<< HEAD
                <MDBCol style={{ maxWidth: "40rem" }}>
                    
                    <img cascade style={{ width: '40rem' }} src={stockeventpic} />
                    <br/>
                    <h2 style={{textAlign:"left"}}> 
                      Event Name
                    </h2>
                    <h2 style={{textAlign:"left"}}>
                      Organization
                    </h2>
                </MDBCol>
                <MDBCol style={{ maxWidth: "40rem" }}>
                    <h2 style={{textAlign:"left"}}> 
                      Description
                    </h2>
                    <hr/>
                    <br/>
                    <p> 
                      Lorem ipsum dolor sit amet, pri in ridens recteque, ex eum choro utinam. Vis perpetua appellantur no, discere facilis fuisset est te. Esse appellantur disputationi per in, ne case intellegat vix. Primis mucius mediocritatem ex sea, vim ei facete impedit oporteat.
                    </p>
                    <h2 style={{textAlign:"left"}}>
                      Information
                    </h2>
                    <hr/>
                </MDBCol>
                <MDBCol> 
                  <div class="flex-center">
                  <MDBBtn>{//TODO: make this not ass
              notLoggedIn ? "Log in to do thingys" :
              people.filter(person => person.id === user.id).length > 0 ? "Unsign up" : "Sign up"
            }</MDBBtn>
                  </div>
                
                </MDBCol>
            
=======
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
>>>>>>> 922afbe56e038053e4db6fd0051f308569ab00af
            </MDBRow>
            </Jumbotron>
            <Jumbotron> 
              <MDBRow>
                  <MDBCol> 
                    <h2 style={{textAlign: "left"}}>
                    Location  
                   </h2> 
                   <hr/>
                   <br/>
                      <Map/>
                  </MDBCol>
              </MDBRow>
            </Jumbotron>
        </div>
        );
      
    }
}

export default Event;