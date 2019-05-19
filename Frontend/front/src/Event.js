import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {getEventByID, getPersonByEventID} from './DataFetcher.js';
class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      event: null,
      people: []
    };
  }
  componentDidMount() {
    var eventID = this.props.location.search.substring(10);
    getEventByID(eventID, this.loadData.bind(this));
    getPersonByEventID(eventID, this.addPerson.bind(this));
  }
  loadData(data) {
    this.setState({event: data, loading: false});
  }
  addPerson(person) {
    this.setState(prevState => ({
      people: [...prevState.people, person]
    }));
  }
    render() {
      const {loading, event, people} = this.state;
      console.log(event); //look in 
      console.log(people);
      if(loading) return <div>Loading...</div>; //TODO; pretty
        return ( //TODO: display info about event and people
          //Create a signup button too and then tell Steven once ur done
          <div>
        
        </div>
        );
      
    }
}

export default Event;