import React, {Component} from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBCol, MDBRow,MDBCardHeader, MDBInput, MDBIcon, MDBBtn, MDBModalFooter} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { createOrganization } from './DataFetcher.js';
import Cookies from 'universal-cookie';

class OrganizationSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            password2: "",
            firstName: "",
            lastName: "",
            email: "",
            phoneNum: "",
            orgname: "",
            orgemail: "",
            orgaddress: "",
            orghomepage: "",
            orgphone: ""
        };
    }
    onClick() {
        const {username, password, password2, firstName, lastName, email, phoneNum, orgname, orgemail, orgaddress, orghomepage, orgphone} = this.state;
        if(password !== password2) {
            alert("Passwords do not match, please try again.");
            return;
        }
        createOrganization(username, password, firstName, lastName, email, phoneNum, orgname, orgemail, orgaddress, orghomepage, orgphone, (data) => {
            new Cookies().set("user", data.id, { path: "/"});
            console.log(data);
            this.props.update(() => this.props.history.push("/profile"));
        });
    }
    onChange(key, val) {
        this.setState({
            [key]: val
        });
    }
    render() {
        const {username, password, password2, firstName, lastName, email, phoneNum, orgname, orgemail, orgaddress, orghomepage, orgphone} = this.state;
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
                                    label="First Name"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    value={firstName}
                                    onChange={(e) => this.onChange("firstName", e.target.value)}
                                />
                                <MDBInput
                                    label="Last Name"
                                    icon="angle-right"
                                    group
                                    type="text"
                                    validate
                                    value={lastName}
                                    onChange={(e) => this.onChange("lastName", e.target.value)}
                                />
                             
                              <MDBInput
                                  label="Email"
                                  icon="envelope"
                                  group
                                  type="email"
                                  validate
                                  value={email}
                                  onChange={(e) => this.onChange("email", e.target.value)}
                              />
                              <MDBInput
                                  label="Phone Number"
                                  icon="phone"
                                  group
                                  type="text"
                                  validate
                                  value={phoneNum}
                                  onChange={(e) => this.onChange("phoneNum", e.target.value)}
                              />
                               <MDBInput
                                  label="Username"
                                  icon="user-circle"
                                  group
                                  type="text"
                                  validate
                                  value={username}
                                  onChange={(e) => this.onChange("username", e.target.value)}
                              />
                              <MDBInput
                                  label="Your password"
                                  icon="lock"
                                  group
                                  type="password"
                                  validate
                                  value={password}
                                  onChange={(e) => this.onChange("password", e.target.value)}
                              />
                              <MDBInput
                                  label="Confirm your password"
                                  icon="exclamation-triangle"
                                  group
                                  type="password"
                                  validate
                                  value={password2}
                                  onChange={(e) => this.onChange("password2", e.target.value)}
                              />
                              {/*, orgname, orgemail, orgaddress, orghomepage, orgphone */}
                              <MDBInput
                                  label="Organization Name"
                                  icon="user-circle"
                                  group
                                  type="text"
                                  validate
                                  value={orgname}
                                  onChange={(e) => this.onChange("orgname", e.target.value)}
                              />
                              <MDBInput
                                  label="Organization Email"
                                  icon="envelope"
                                  group
                                  type="email"
                                  validate
                                  value={orgemail}
                                  onChange={(e) => this.onChange("orgemail", e.target.value)}
                              />
                                <MDBInput
                                  label="Organization Address"
                                  icon="envelope"
                                  group
                                  type="email"
                                  validate
                                  value={orgaddress}
                                  onChange={(e) => this.onChange("orgaddress", e.target.value)}
                              />

                                <MDBInput
                                  label="Organization Homepage"
                                  icon="angle-right"
                                  group
                                  type="text"
                                  validate
                                  value={orghomepage}
                                  onChange={(e) => this.onChange("orghomepage", e.target.value)}
                              />

                                <MDBInput
                                  label="Organization Phone Number"
                                  icon="phone"
                                  group
                                  type="text"
                                  validate
                                  value={orgphone}
                                  onChange={(e) => this.onChange("orgphone", e.target.value)}
                              />
                              
                              </div>
                              <div className="text-center py-4 mt-3">
                              <MDBBtn onClick={this.onClick.bind(this)} color="orange">
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

export default OrganizationSignUp;