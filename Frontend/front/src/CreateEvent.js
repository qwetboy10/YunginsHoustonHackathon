import React, {Component} from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { createEvent, getPersonByID, getOrganizationByID } from './DataFetcher';
import Cookies from 'universal-cookie';
class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {orgID: null};
    }
    componentDidMount() {
        getPersonByID(new Cookies().get("user"), (data) => getOrganizationByID(data.organization, (org) => this.setState({orgID : org.id})));
    }
    onClick() {
        const {orgID, eventAddress, eventName, eventDate, eventDuration, eventBlurb, eventDesc } = this.state;
        createEvent(orgID,eventAddress, eventName, eventDate, eventDuration, eventBlurb, eventDesc, (id) => this.props.history.push('/event/?=event_id=' + id));
    }
    render() {
      
        return (
          <div>
        
        </div>
        );
      
    }
}

export default CreateEvent;