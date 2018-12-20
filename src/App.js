import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/Login';
import ProfileCollection from './components/ProfileCollection';
import ProfileCard from './components/ProfileCard';
import Record from './components/Record';
import Suggestion from './components/Suggestion';

class App extends Component {

  state = {
    users: [],
    profiles: [],
    vaccines: []
  }

  fetchUsers = () => {
    fetch('http://localhost:5000/api/users')
    .then(resp => resp.json())
    .then(users => this.setState({users}))
  }


  fetchProfiles = () => {
    fetch('http://localhost:5000/api/profiles')
    .then(resp => resp.json())
    .then(profiles => this.setState({profiles}))
  }

  fetchVaccines = () => {
    fetch('http://localhost:5000/api/vaccines')
    .then(resp => resp.json())
    .then(vaccines => this.setState({vaccines}))
  }

  componentDidMount() {
    this.fetchUsers()
    this.fetchProfiles()
    this.fetchVaccines()
  }

  render() {
    return (
      <div className="container">
        <header className="display-1">
          <h1>don't die :)</h1>
          < Login />

        </header>
      </div>
    );
  }
}

export default App;
