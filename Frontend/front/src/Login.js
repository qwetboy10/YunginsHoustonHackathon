import React, {Component} from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow,MDBCardHeader, MDBInput, MDBIcon, MDBBtn, MDBModalFooter} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Cookies from 'universal-cookie';
import { authenticateUser } from './DataFetcher.js';
class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: ""
      };
    }
    onClick() {
        const cookies = new Cookies();
        const {username, password} = this.state;
        authenticateUser(
          username, password, 
          ((data) => {
            this.props.history.push("/profile");
            cookies.set("user", data.id, { path: "/"});
            this.props.update();
          })
          ,
          (() => alert("Username and password combination not recognized. Please try again."))
        );
    }
    setUsername(username) {
      this.setState({username});
    }
    setPassword(password) {
      this.setState({password});
    }
    render() {
        const {username, password} = this.state;
        return (
          <div>
            <br/><br/>
        <MDBContainer>
         <MDBRow center>
           <MDBCol md="6">
             <MDBCard>
               <MDBCardBody>
                 <MDBCardHeader className="form-header warm-flame-gradient rounded">
                   <h3 className="my-3">
                     <MDBIcon icon="lock" /> Login
                   </h3>
                 </MDBCardHeader>
                 <MDBInput label="Username" value={username} onChange={(e) => this.setUsername(e.target.value)}/>
                 <MDBInput label="Password" type="password" value={password} onChange={(e) => this.setPassword(e.target.value)}/>
                 <div className="text-center mt-4">
                   <MDBBtn color="deep-orange" className="mb-3" onClick={this.onClick.bind(this)}>
                     Login
                   </MDBBtn>
                 </div>
                 <MDBModalFooter>
                   <div className="font-weight-light">
                     <a>Not a member? </a><a href=""onClick={()=> this.props.history.push("/signup")}>Sign Up</a><br/>
                     <a href=""onClick={()=> this.props.history.push("/forgot")}>Forgot Password?</a>
                   </div>
                 </MDBModalFooter>
               </MDBCardBody>
             </MDBCard>
           </MDBCol>
           
           
         </MDBRow>
        </MDBContainer>
        </div>
        );
      
    }
}

export default Login;