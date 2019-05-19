import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import createUser from './DataFetcher.js';
import Cookies from 'universal-cookie';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
            phoneNum: ""
        };
    }
    onClick() {
        const {username, password, firstName, lastName, email, phoneNum} = this.state;
        createUser(username, password, firstName, lastName, email, phoneNum, (data) => {
            this.props.history.push("/profile");
            cookies.set("user", data.id, { path: "/"});
        });
    }
    render() {
        return (
            <div>
                <br/>
                <br/>
                <MDBContainer>
                  <MDBRow center>
                      <MDBCol md="6">
                      <MDBCard>
                          <MDBCardBody>
                          <form>
                              <p className="h4 text-center py-4">Sign up</p>
                              <div className="grey-text">
                              <MDBInput
                                  label="Your name"
                                  icon="user"
                                  group
                                  type="text"
                                  validate
                                  error="wrong"
                                  success="right"
                              />
                              <MDBInput
                                  label="Your email"
                                  icon="envelope"
                                  group
                                  type="email"
                                  validate
                                  error="wrong"
                                  success="right"
                              />
                              
                              <MDBInput
                                  label="Your password"
                                  icon="lock"
                                  group
                                  type="password"
                                  validate
                              />
                              <MDBInput
                                  label="Confirm your password"
                                  icon="exclamation-triangle"
                                  group
                                  type="text"
                                  validate
                                  error="wrong"
                                  success="right"
                              />
                              </div>
                              <div className="text-center py-4 mt-3">
                              <MDBBtn color="orange" type="submit">
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

export default Signup;