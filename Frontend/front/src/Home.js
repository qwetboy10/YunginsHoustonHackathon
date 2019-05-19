import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container} from 'react-bootstrap';
import ss1 from './slideshow1.jpg';
import ss2 from './slideshow2.jpg';
import ss3 from './slideshow3.jpg';
import vhands from './volunteerhands.jpg';
import Footer from './Footer.js';

class Home extends Component {
    render() {
        return (
          <div>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ss1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h1>Serving the Houston community since 2019</h1>
                <h2>Free, intuitive platform to help connect volunteers to events and event organizers to volunteers</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ss2}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1 style={{color:"black"}}>Build life-long friendships through teamwork and volunteering opportunities</h1>
                <h2 style={{color:"black"}}>Volunteering creates community and helps out our wonderful city</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ss3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1>Helping volunteers find events, and event organizers find volunteers</h1>
                <h2>Effective rating system for finding qualified volunteers</h2>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>;

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

            <Footer />;

          </div>
        );
      }
}

export default Home;