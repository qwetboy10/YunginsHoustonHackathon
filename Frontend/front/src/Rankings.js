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
          first_name:"Steven",
          last_name:"Cheng",
          username:"helloworld",
          karma:212
        },
        {
          first_name:"Sam",
          last_name:"Armstrong",
          username:"jawns",
          karma:100
        },
        {
          first_name:"Squid",
          last_name:"The Kid",
          username:"squidthekid",
          karma:87
        },
        {
          first_name:"Tristan",
          last_name:"Weaselpaper",
          username:"wheeeee",
          karma:53
        },
        {
          first_name:"Ronak",
          last_name:"Idk",
          username:"hallo",
          karma:30
        },
        {
          first_name:"Meggie",
          last_name:"Cheng",
          username:"birb",
          karma:27
        },
        {
          first_name:"Zeki",
          last_name:"Gerbil",
          username:"quack",
          karma:12
        },
        {
          first_name:"Ral",
          last_name:"Cow",
          username:"moo",
          karma:2
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