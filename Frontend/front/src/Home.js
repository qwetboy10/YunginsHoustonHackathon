import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import {getEvents, getOrganizations, getSkills} from './DataFetcher.js';
import NavBar from './NavBar.js';

class Home extends Component {
    render() {
        return (
          <div>
            <NavBar {...this.props}/>
          </div>
        );
      }
}

export default Home;