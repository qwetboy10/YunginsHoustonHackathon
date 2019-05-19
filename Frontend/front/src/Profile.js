import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container} from 'react-bootstrap';

class Profile extends Component {
    render() {
        const {user} = this.props;
        if(!user) return <div>You arent logged in</div>//TODO: make this pretty
        return ( //TODO: add other things for user, console.log(user) for the things u can use
          <div>
            <Jumbotron fluid>
            <Container>
                <h1>Profile</h1>
                <h3>{user.first_name + " " + user.last_name}</h3>
            </Container>
            </Jumbotron>;
          </div>
        );
      }
}

export default Profile;