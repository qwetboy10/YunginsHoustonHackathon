import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container, Table} from 'react-bootstrap';

class Rankings extends Component {
    render() {
        return (
          <div>
            <Jumbotron fluid>
            <Container>
                <h1>Rankings</h1>
                <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Ranking</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Karma</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Stoov</td>
                    <td>Moo</td>
                    <td>@bessie</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Zook</td>
                    <td>Moo</td>
                    <td>@turkey</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Rol</td>
                    <td>Moo</td>
                    <td>@fat</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </Table>;
            </Container>
            </Jumbotron>;
          </div>
        );
      }
}

export default Rankings;