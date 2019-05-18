import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EventList from './EventList.js';
import Home from './Home.js';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/events' component={EventList}/>
        <Route path='/' component={(props) => <Home {...props}/>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
