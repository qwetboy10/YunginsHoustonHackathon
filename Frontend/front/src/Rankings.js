import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container, Table} from 'react-bootstrap';

class Rankings extends Component {
  mapToComponent(data, index)
  {
    return (<tr>
      <td>{index+1}</td>
      <td>{data.first_name}</td>
      <td>{data.last_name}</td>
      <td>{data.username}</td>
      <td>{data.karma}</td>
    </tr>);
  }
    render() {
      const data = [
        {
          first_name:"Stebby",
          last_name:"Chong",
          username:"s692098",
          karma:2
        },
        {
          first_name:"Zook",
          last_name:"Moo",
          username:"turkey",
          karma:50
        },
        {
          first_name:"Rol",
          last_name:"Moo",
          username:"fat",
          karma:10
        }
      ]
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
                  {data.map(this.mapToComponent)}
                </tbody>
              </Table>
            </Container>
            </Jumbotron>
          </div>
        );
      }
}

export default Rankings;