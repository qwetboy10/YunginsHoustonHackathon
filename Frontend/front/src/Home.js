import React, {Component} from 'react';
import NavBar from './NavBar.js';
import {Carousel,  } from 'react-bootstrap';
import title from './title.jpg';
import ss1 from './slideshow1.jpg';
import ss2 from './slideshow2.jpg';
import ss3 from './slideshow3.jpg';

class Home extends Component {
    render() {
        return (
          <div>
            <img
                className="d-block w-100"
                src={title}
                alt="Title"
            />
            
            <NavBar />

            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                //src="holder.js/800x400?text=First slide&bg=373940"
                //src="https://www.bswllc.com/assets/htmldocuments/wp-content/uploads/2013/07/iStock_000018254025Medium.jpg"
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
                //src="holder.js/800x400?text=Second slide&bg=282c34"
                //src="https://media.istockphoto.com/photos/group-of-volunteers-putting-hands-on-top-in-park-picture-id540095144?k=6&m=540095144&s=612x612&w=0&h=rY3FrgzoZB8-5G9GkTaKtL9uYAYambvXtPCM1cFFFQ0="
                src={ss2}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Build life-long friendships through teamwork and volunteering opportunities</h3>
                <p>etc</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                //src="holder.js/800x400?text=Third slide&bg=20232a"
                //src="https://www.oregon.gov/highered/institutions-programs/workforce/PublishingImages/AdobeStock_176681813-web2.jpg"
                src={ss3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>etc</h3>
                <p>etc</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>


          </div>
        );
      }
}

export default Home;