import React, {Component} from 'react';
import NavBar from './NavBar.js';
import Login from './Login.js';
import {Carousel, Card, Jumbotron, Container, Row, Col, Image, Figure, Button} from 'react-bootstrap';
import ss1 from './slideshow1.jpg';
import ss2 from './slideshow2.jpg';
import ss3 from './slideshow3.jpg';
import vhands from './volunteerhands.jpg';
import Footer from './Footer.js';
import step1 from './step1.jpg';
import step2 from './step2.jpg';
import step3 from './step3.jpg';
import cal from './cal.jpg';
import star from './star.jpg';
import car from './car.jpg';

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
                <h1>What is Houston Volunteer Central about?</h1>
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

            <Jumbotron fluid style={{backgroundColor:'#66c3ff'}}>
            <Container>
                <h1 style={{color:"white"}}>How does Houston Volunteer Central work?</h1>
                <br></br>
                <p style={{color:"white",fontSize:20}}>
                Below are some simple steps:
                <br></br>
                <br></br>
                <Container>
                <Row>
                    <Col xs={6} md={4}>
                    <Figure>
                    <Figure.Image
                        width={220}
                        height={220}
                        alt="171x180"
                        src={step1} roundedCircle
                    />
                    <Figure.Caption style={{color:"white",fontSize:20}}>
                        Step 1: Sign up as a volunteer
                    </Figure.Caption>
                    </Figure>
                    </Col>
                    <Col xs={6} md={4}>
                    <Figure>
                    <Figure.Image
                        width={220}
                        height={220}
                        alt="171x180"
                        src={step2} roundedCircle
                    />
                    <Figure.Caption style={{color:"white",fontSize:20}}>
                        Step 2: Search for an event
                    </Figure.Caption>
                    </Figure>
                    </Col>
                    <Col xs={6} md={4}>
                    <Figure>
                    <Figure.Image
                        width={220}
                        height={220}
                        alt="171x180"
                        src={step3} roundedCircle
                    />
                    <Figure.Caption style={{color:"white",fontSize:20}}>
                        Step 3: Register for an event
                    </Figure.Caption>
                    </Figure>
                    </Col>
                </Row>
                </Container>
                </p>

            </Container>
            </Jumbotron>;

            <Jumbotron fluid style={{backgroundColor:'#ffbf66'}}>
            <Container>
                <h1 style={{color:"white"}}>Additional Information</h1>
                <br></br>
                <Container>
                <Row>
                    <Col xs={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cal} />
                    <Card.Body>
                        <Card.Title>How do I make an event as an organizer?</Card.Title>
                        <Card.Text>
                        It's just as easy for organizers to utilize this site as it is for volunteers! After creating an organization, all organizers need to do is link their accounts with the org. If the organization is registered...
                        </Card.Text>
                        <Button variant="primary">Read more</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={star} />
                    <Card.Body>
                        <Card.Title>How does karma and ranking work?</Card.Title>
                        <Card.Text>
                        Our site holds both event organizers and volunteers accountable for performance and reputation by implementing a "karma" system. Rankings can help both parties evaluate and find experienced...
                        </Card.Text>
                        <Button variant="primary">Read more</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={car} />
                    <Card.Body>
                        <Card.Title>How can I get a ride with a trusted driver?</Card.Title>
                        <Card.Text>
                        Another unique feature of our website is that we utilize a separate ranking system for drivers to assist persons that may not have access to a vehicle/be able to drive themselves to volunteer...
                        </Card.Text>
                        <Button variant="primary">Read more</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
                </Container>

            </Container>
            </Jumbotron>;

            <Footer />;

          </div>
        );
      }
}

export default Home;