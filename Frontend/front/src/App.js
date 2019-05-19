import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EventList from './EventList.js';
import Home from './Home.js';
import Profile from './Profile.js';
import NavBar from './NavBar.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar {...this.props} />
          <Switch>
            <Route path='/profile' component={Profile}/>
            <Route path='/events' component={EventList}/>
            <Route path='/' component={Home} />
          </Switch>
      </div>
    );
  }
}

export default App;
