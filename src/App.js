import React, { Component } from 'react';
import './App.css';
import Home from './components/HomeComponent';
import About from './components/AboutComponent';
import Profiles from './components/ProfilesComponent';
import { PROFILES } from './shared/profiles';
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          profiles: PROFILES
      };
  }
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route exact path='/profiles' component={Profiles}/>
          <Route path='/about' component={About}/>    
          <Route path='/profiles/:profilesid' render={() =><Profiles profiles ={this.props.profiles}/>}/> 
          <Redirect to='/home'/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
