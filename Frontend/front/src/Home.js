import React, {Component} from 'react';
import NavBar from './NavBar.js';
import {Carousel, Card, Jumbotron, Container} from 'react-bootstrap';
import title from './title.jpg';
import ss1 from './slideshow1.jpg';
import ss2 from './slideshow2.jpg';
import ss3 from './slideshow3.jpg';
import vhands from './volunteerhands.jpg';

class Home extends Component {
    render() {
        return (
          <div>
            <NavBar {...this.props}/>

            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ss1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Serving the Houston community since 2019</h3>
                <p>Free, intuitive platform to help connect volunteers to events and event organizers to volunteers</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ss2}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 style={{color:"black"}}>Build life-long friendships through teamwork and volunteering opportunities</h3>
                <p style={{color:"black"}}>Volunteering creates community and helps out our wonderful city</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ss3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Helping volunteers find events, and event organizers find volunteers</h3>
                <p>Effective rating system for finding qualified volunteers</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            <Jumbotron fluid>
            <Container>
                <h1>What is HVC about?</h1>
                <p>
                HVC is a volunteering platform aimed at facilitating event organization and volunteer registration. 
                </p>
                <img
                className="d-block w-100"
                src={vhands}
                alt="First slide"
                />
            </Container>
            </Jumbotron>;

          </div>
        );
      }
}

export default Home;