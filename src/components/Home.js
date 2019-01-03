import React, { Component } from 'react';
import ProfileCollection from './ProfileCollection';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navburger from './Navburger';
import AddProfile from './AddProfile';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class Home extends Component {
  state = {
    profiles: []
  }

  componentDidMount() {
    this.fetchProfiles()
  }

  componentDidUpdate() {
    this.fetchProfiles()
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

  createProfile = (e) => {
    console.log('balls')
    e.preventDefault()
    fetch(`http://localhost:5000/api/profiles/`, {
      method:'POST',
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type':'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify({
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        gender: e.target.gender.value,
        birthdate: e.target.birthdate.value,
        userId: this.props.userId
      })
    })
    .then( res => res.json() )
    .then( resp => console.log(resp) )
  }

  render() {
    return (
      <Paper style={{padding: 12}}>
        < Navburger />
        {this.state.profiles.length ?
          < ProfileCollection profiles={this.state.profiles} userId={this.props.userId} />
          : < AddProfile createProfile={this.createProfile} />
        }
        <Button onClick={this.props.logout} variant="contained">log out [move to 🍔]</Button>
      </Paper>
    )
  }
}

export default Home;
