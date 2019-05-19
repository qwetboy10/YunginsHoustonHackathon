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
import Cookies from 'universal-cookie';
import { getPersonByID } from './DataFetcher.js';
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
  checkCookies() {
    const cookie = new Cookies();
    const userID = cookie.get("user");
    if(userID !== undefined) getPersonByID(cookie.get("user"), (data) => this.setState({user: data}));
    else this.setState({user: null});
  }
  render() {
    const {user} = this.state;
    console.log(user);
    return (
      <div>
        <NavBar {...this.props} update={this.checkCookies.bind(this)} user={user}/>
          <Switch>
            <Route path='/events' component={EventList}/>
            <Route path='/faq' component={FAQ}/>
            <Route path='/contact' component={Contact} />
            <Route path='/rankings' component={Rankings} />
            <Route path='/profile' component={(props) => <Profile user={user}/>} />
            <Route path='/login' component={(props) => <Login {...props} update={this.checkCookies.bind(this)}/>} />
            <Route path='/' component={Home} />
            
          </Switch>
      </div>
    );
  }
}

export default App;
