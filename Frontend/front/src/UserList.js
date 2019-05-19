import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import prof from './asd.jpeg';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon, MDBContainer } from 'mdbreact';


class UserList extends Component {
    render() {
      
        return (
        <div>
              <MDBCol bottom style={{ maxWidth: "25rem" }} >
                    <MDBCard wide display="inline">
                        <MDBCardImage className="view view-cascade gradient-card-header blue-gradient" cascade tag="div">
                        <div style={{height:"100px", width:"100px", overflow:"hidden", border_radius:"100px", padding: "20px",  }}> 
                            <img style={{height:"100px", width:"100px"}} src={prof} />
                        </div>
                            <h2 className="">  Im Tired </h2>
                        </MDBCardImage>
                        <MDBCardBody cascade>
                            <MDBCardText>HI</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
        </div>
        );
      
    }
}

export default UserList;