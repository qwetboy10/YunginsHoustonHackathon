import React, {Component} from 'react';
import {getPersonByID} from './DataFetcher.js';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null
        };
    }
    componentDidMount() {
        getPersonByID(this.props.userID, (data) => this.setState({userData: data}));
    }
    render() {
        return (
          <div>
              Sorry! This page is still under development.
          </div>
        );
      }
}

export default Profile;