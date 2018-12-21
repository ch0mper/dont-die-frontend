import React, { Component } from 'react';
import ProfileCollection from './components/ProfileCollection';
import Navburger from './components/Navburger';

class Home extends Component {
  state = {
    profiles: []
  }

  componentDidMount() {
    this.fetchProfiles()
  }

  fetchProfiles = () => {
    // fetch('http://localhost:5000/api/profiles')
    // this route doesn't exist yet
    fetch('http://localhost:5000/api/users/:id/profiles, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(resp => resp.json())
    .then(profiles => this.setState({profiles}))
  }

  render() {
    return (
      <div>
        < Navburger />
        < ProfileCollection />
      </div>
    )
  }
}

export default Home;
