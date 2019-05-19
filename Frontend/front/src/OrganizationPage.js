import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import asd from './asd.jpeg';
import {Carousel, Card, Jumbotron, Container} from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { getOrganizationByID } from './DataFetcher.js';

class OrganizationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      org: null
    };
  }
  componentDidMount() {
    var orgID = this.props.location.pathname.substring(14);
    getOrganizationByID(orgID, data => this.setState({org: data, loading: false}));
  }
    render() {
      const {org} = this.state;
        return (
          <div>
            <Jumbotron fluid>
            <Container>
            <h1>Organization Page</h1>
                <hr color="black"></hr>
                <br/>
                <div style={{height:"100px", width:"100px", overflow:"hidden", border_radius:"100px", position:"relative", text_align:"center", color:"white"}}> 
                  <img style={{height:"100%", width:"100%"}} src={asd} />
        {/*<a onClick = {() => }style={{position:"absolute", top: "70px", left:"25px", height:"100%", width:"100%", font_size:"5px"}}>Change</a>*/}
                </div>
                <br/>
                <h2 style={{textAlign:"left"}}></h2>
                <h2 style={{textAlign:"left"}}>{"Name of Organization "}</h2>
                <br/>
                <br/>
                
                <h1>Contact Information</h1>
                <hr color="black"></hr>
                <br/>
                <h5 style={{textAlign:"left"}}>Email: {org.email}</h5>
                <h5 style={{textAlign:"left"}}>Phone Number: {org.phone}</h5>
                <h5 style={{textAlign:"left"}}>Address: {org.address}</h5>
                <h5 style={{textAlign:"left"}}>Website: {org.home_page}</h5>
                <h5 style={{textAlign:"left"}}>Karma: {org.karma}</h5>
                <br/>
                <br/>

                <h1>Events</h1>
                <hr color="black"/>
                <br></br>
                <MDBContainer>
                  <MDBRow center>
                    <MDBCol> 

                    </MDBCol>
                  </MDBRow>
                </MDBContainer>



            </Container>
            </Jumbotron>;
          </div>
        );
      }
}

export default OrganizationPage;