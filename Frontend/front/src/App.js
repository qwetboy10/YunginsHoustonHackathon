import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EventList from './EventList.js';
import Home from './Home.js';
import Profile from './Profile.js';
import NavBar from './NavBar.js';
import FAQ from './FAQ.js';
import Contact from './Contact.js';
import Rankings from './Rankings.js';
import Login from './Login.js';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar {...this.props} />
          <Switch>
            <Route path='/events' component={EventList}/>
            <Route path='/faq' component={FAQ}/>
            <Route path='/contact' component={Contact} />
            <Route path='/rankings' component={Rankings} />
            <Route path='/profile' component={Profile} />
            <Route path='/login' component={Login} />
            <Route path='/' component={Home} />
            
          </Switch>
      </div>
    );
  }
}

export default App;
