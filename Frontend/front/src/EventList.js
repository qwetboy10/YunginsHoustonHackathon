import React, {Component} from 'react';
import {getEvents} from './DataFetcher.js';
import NavBar from './NavBar.js';

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventData: null
        };
    }
    componentDidMount() {
        getEvents((data) => this.setState({eventData: data}));
    }
    getEventComponent(event) { //TODO: Make this not disgusting
        return <div key={event.id}>
            <h1>{event.name}</h1>
            <p>{event.address}</p>
            <p>{event.date}</p>
            <p>{event.organization}</p>
        </div>
    }
    render() {
        const {eventData} = this.state;
        if(!eventData) return <div>Loading...</div>; //TODO: make a loading page, probably make it Loading.js so it can be used everywhere
        return (
          <div>
              {eventData.map(event => this.getEventComponent(event))}
          </div>
        );
      }
}

export default EventList;