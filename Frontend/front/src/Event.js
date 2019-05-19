import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {getEventByID, getPersonByEventID, getPersonByID, signUpEvent, unSignUpEvent} from './DataFetcher.js';
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
      user: null,
      notLoggedIn: false
    };
  }
  componentDidMount() {
    var eventID = this.props.location.search.substring(10);
    getEventByID(eventID, this.loadData.bind(this));
    getPersonByEventID(eventID, this.addPerson.bind(this));
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
  addPerson(person) {
    this.setState(prevState => ({
      people: [...prevState.people, person]
    }));
  }
  signUp() {
    const {event, user, people} = this.state;
    signUpEvent(event.id, people, user);
  }
  unSignUp() {

  }
    render() {
      const {loading, loaded, event, people, user, notLoggedIn} = this.state;
      console.log(event); //look in 
      console.log(people);
      if(loading !== loaded) return <div>Loading...</div>; //TODO; pretty
        return ( //TODO: display info about event and people
          //Create a signup button too and then tell Steven once ur done
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
            <MDBBtn>{//TODO: make this not ass
              notLoggedIn ? "Log in to do thingys" :
              people.filter(person => person.id == user.id).length > 0 ? "Unsign up" : "Sign up"
            }</MDBBtn>
            </MDBRow>
            </Jumbotron>
        </div>
        );
      
    }
}

export default template;