import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import {getEvents, getOrganizations, getSkills} from './DataFetcher.js';
import Home from './Home.js';

class App extends Component {
  componentDidMount() {
    getEvents(console.log);
    getOrganizations(console.log);
    getSkills(console.log);
  }
  render() {
    return (
      <Router>
        <Route path='/' exact component={(props) => 
          <Home {...props}/>
        }></Route>
      </Router>
    );
  }
}

export default App;
