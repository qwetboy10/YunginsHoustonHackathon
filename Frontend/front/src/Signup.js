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
        
        </div>
        );
      
    }
}

export default Signup;