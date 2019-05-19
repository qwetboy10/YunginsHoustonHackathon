import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './UserList.css'
import prof from './asd.png';
import { MDBAvatar,MDBCol , MDBCard, MDBCardBody} from 'mdbreact';


class UserList extends Component {
    render() {
      
        return (
        <div>
            <MDBCol style={{ maxWidth: "20rem" }}>
              <MDBCard className="face front">
                <MDBCardBody className="mx-auto white" circle>
                    <img src={prof} alt="" className="rounded-circle" style={{width:"170px", height:"170px"}}/>
                </MDBCardBody>
                <MDBCardBody>
                    <h4 className="font-weight-bold mb-3">Name</h4>
                    <p className="font-weight-bold blue-text">Karma Score: </p>
                </MDBCardBody>
          </MDBCard>
          </MDBCol>
        </div>
        );
      
    }
}

export default UserList;