import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container} from 'react-bootstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';
import asd from './asd.jpeg';
import {getPersonByID, getPersonByUsername, getEventsByUsername} from './DataFetcher.js';
import Cookies from 'universal-cookie';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 1,
      loaded: 0,
      user: null,
      events: [],
      failed: false,
      notLoggedIn: false
    };
    this.storeData = this.storeData.bind(this);
  }
  componentDidMount() {
    if(!this.props.location.pathname.substring(9)) {
      var id = new Cookies().get("user");
      if(id === undefined) this.setState({notLoggedIn: true});
      else {
        this.setState({loaded: 0});
        getPersonByID(id, data => this.props.history.push(`/profile/${data.username}`));
      }
    } else {
      this.setState({loaded: 0});
      getPersonByUsername(this.props.location.pathname.substring(9), (data) => this.storeData(data, 'user'), () => this.setState({failed: true}));
      getEventsByUsername(this.props.location.pathname.substring(9), (data) => this.setState(prevState => ({events: [...prevState.events, data]})), () => this.setState({failed: true}));
    }

  }
  getEventComponent(event) { //TODO: Make this not disgusting
    return (
    
    <div key={event.id}>
    <br/><br/>
    <MDBCol style={{ maxWidth: "50rem" }} >
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
                    <MDBBtn color="primary" onClick={() => this.props.history.push(`/event/?event_id=${event.id}`)}>View Event</MDBBtn>
                    </p>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
    
    </div>
    );
}
  storeData(data, key) {
    this.setState(prevState => ({
      loaded: prevState.loaded+1,
      [key]: data
    }));
  }
    render() {
        const {loaded, loading, user, failed, notLoggedIn} = this.state;
        console.log(this.state);
        if(failed) return(
          <div>
            <br/>
            <MDBContainer>
            <MDBRow center>
                <MDBCol bottom style={{ maxWidth: "25rem" }} >
                    <MDBCard wide display="inline">
                    <MDBCardImage className="view view-cascade gradient-card-header blue-gradient" cascade tag="div">
                        <h2  center="true" className="h2-responsive mb-2">User does not exist</h2>
                    </MDBCardImage>
                    <MDBCardBody cascade>
                        
                        <p>
                        <MDBBtn center="true" color="primary" onClick={() => this.props.history.push("/login")}>Please Click here to Login</MDBBtn>
                        </p>
                        
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                
            </MDBRow>
        </MDBContainer>
          </div>
         
        ) 
        if(notLoggedIn) return (
          <div>
            <br/>
            <MDBContainer>
            <MDBRow center>
                <MDBCol bottom style={{ maxWidth: "25rem" }} >
                    <MDBCard wide display="inline">
                    <MDBCardImage className="view view-cascade gradient-card-header peach-gradient" cascade tag="div">
                        <h2  center="true" className="h2-responsive mb-2">You are not logged in</h2>
                    </MDBCardImage>
                    <MDBCardBody cascade>
                        
                        <p>
                        <MDBBtn center="true" color="orange" onClick={() => this.props.history.push("/login")}>Please Click here to Login</MDBBtn>
                        </p>
                        
                    </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                
            </MDBRow>
        </MDBContainer>
          </div>
        );
        if(loaded != loading) return <div>Loading...</div>//make this pretty
        return ( //TODO: add other things for user, console.log(user) for the things u can use
          <div>
            <Jumbotron fluid>
            <Container>
                <h1>Profile</h1>
                <hr color="black"></hr>
                <br/>
                <div style={{height:"100px", width:"100px", overflow:"hidden", border_radius:"100px", position:"relative", text_align:"center", color:"white"}}> 
                  <img style={{height:"100%", width:"100%"}} src={asd} />
        {/*<a onClick = {() => }style={{position:"absolute", top: "70px", left:"25px", height:"100%", width:"100%", font_size:"5px"}}>Change</a>*/}
                </div>
                <br/>
                <h2 style={{textAlign:"left"}}>{user.first_name + " " + user.last_name}</h2>
                <h5 style={{textAlign:"left"}}>{"Username: "+user.username}</h5>
                <br/>
                <br/>
                
                <h1>Contact Infromation</h1>
                <hr color="black"></hr>
                <br/>
                <h5 style={{textAlign:"left"}}>{"Email: "+user.email}</h5>
                <h5 style={{textAlign:"left"}}>{"Phone Number: "+user.phone}</h5>
                <br/>
                <br/>
                
            </Container>
            <MDBContainer className="event">
              <h1>{user.first_name + " " + user.last_name + "'s Events"}</h1>
              <hr color="black"/>
                <MDBRow>
                    {this.state.events.map(event => this.getEventComponent(event))}
                 </MDBRow>
             </MDBContainer>
            </Jumbotron>;
            
          </div>
        );
      }
}

export default Profile;