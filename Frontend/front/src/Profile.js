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
      events: null,
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
        this.setState({loading: 1});
        getPersonByID(id, data => this.props.history.push(`/profile/${data.username}`));
      }
    } else {
      this.setState({loading: 2});
      getPersonByUsername(this.props.location.pathname.substring(9), (data) => this.storeData(data, 'user'), () => this.setState({failed: true}));
      getEventsByUsername(this.props.location.pathname.substring(9), (data) => this.storeData(data, 'events'), () => this.setState({failed: true}));
    }

  }
  storeData(data, key) {
    this.setState(prevState => ({
      loaded: prevState.loaded+1,
      [key]: data
    }));
  }
    render() {
        const {loading, loaded, user, failed, notLoggedIn, events} = this.state;
        if(failed) return <div>This user does not exist.</div>  //make this pretty
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
                <div style={{height:"100px", width:"100px", overflow:"hidden", border_radius:"100px", position:"relative", text_align:"center", color:"white"}}> 
                  <img style={{height:"100%", width:"100%"}} src={asd} />
        {/*<a onClick = {() => }style={{position:"absolute", top: "70px", left:"25px", height:"100%", width:"100%", font_size:"5px"}}>Change</a>*/}
                </div>
                <h3>{user.first_name + " " + user.last_name}</h3>
                <h3>Contact Information</h3>
            </Container>
            </Jumbotron>;
          </div>
        );
      }
}

export default Profile;