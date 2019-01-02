import React, { Component } from 'react';
import ProfileCollection from './ProfileCollection';
import Navburger from './Navburger';

class Home extends Component {
  state = {
    profiles: []
  }

  // this.props.userId exists

  componentDidMount() {
    this.fetchProfiles()
    console.log(localStorage, this.props.userId)
  }

  fetchProfiles = () => {
    fetch(`http://localhost:5000/api/users/${this.props.userId}/profiles`, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(resp => resp.json())
    .then(profiles => this.setState({profiles}))
    // WORKS this is fetching an array of currennt user's profiles
  }

  logout = () => {
    localStorage.clear();
  }

  render() {
    return (
      <div>
        < Navburger />
        < ProfileCollection profiles={this.state.profiles} />
        <button onClick={this.logout}>log out</button>
      </div>
    )
  }
}

export default Home;
