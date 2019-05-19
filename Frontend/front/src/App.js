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
import Signup from './Signup.js';
import Cookies from 'universal-cookie';
import Event from './Event.js';
import Search from './Search.js';
import { getPersonByID } from './DataFetcher.js';
import OrganizationSignUp from './OrganizationSignUp.js';
import OrganizationPage from './OrganizationPage.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    this.checkCookies();
  }
  checkCookies(callback) {
    const cookie = new Cookies();
    const userID = cookie.get("user");
    if(userID !== undefined) getPersonByID(cookie.get("user"), (data) => {
      this.setState({user: data});
      if(callback) callback();
    });
    else this.setState({user: null});
  }
  removeCookies() {
    const cookie = new Cookies();
    cookie.remove("user");
    this.props.history.push("/");
    this.checkCookies();
  }
  render() {
    const {user} = this.state;
    return (
      <div>
        <NavBar {...this.props} update={this.removeCookies.bind(this)} user={user}/>
          <Switch>
            <Route path='/events' component={(props) => <EventList {...props}/>}/>
            <Route path='/faq' component={FAQ}/>
            <Route path='/contact' component={Contact} />
            <Route path='/rankings' component={Rankings} />
            <Route path='/profile' component={(props) => <Profile {...props} user={user}/>} />
            <Route path='/login' component={(props) => <Login {...props} update={this.checkCookies.bind(this)}/>} />
            <Route path='/signup' component={Signup} />
            <Route path='/orgsignup' component={{OrganizationSignUp}}/>
            <Route path='/events' component={(props) => <EventList {...props}/>}/>
            <Route path='/search' component = {(props) => <Search {...props}/>} />
            <Route path='/event' component={(props) => <Event {...props} />} />
            <Route path='/' component={Home} />
          </Switch>
          <OrganizationPage/>
      </div>
    );
  }
}

export default App;
