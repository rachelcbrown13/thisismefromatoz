import React, { Component } from 'react';
import './App.css';
import Home from './components/HomeComponent';
import About from './components/AboutComponent';
import ProfilePage from './components/ProfilesComponent';
import { PROFILES } from './shared/profiles';
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import CharacterCard from './components/CharacterComponent';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          profiles: PROFILES,
          selectedProfile: null
      };
  }

  onProfileSelect(profileId){
    this.setState({selectedProfile: profileId});
  }

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route exact path='/profiles' 
            render={() => 
              <ProfilePage 
                profiles={this.state.profiles}
                onClick={profileId => this.onProfileSelect(profileId)}
              />}
          />
          <Route path='/profiles/:profilesid' 
              render={() => 
                <CharacterCard profile={this.state.profiles.filter(profile => profile.id === this.state.selectedProfile)[0]}         
              />}
          /> 
          <Route path='/about' component={About}/>    
          <Redirect to='/home'/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
