import React, { Component } from 'react';
import ProfileCollection from './ProfileCollection';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navburger from './Navburger';
import AddProfile from './AddProfile';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class Home extends Component {
  state = {
    profiles: [],
    addProfile: false
  }

  renderAddProfile = () => {
    if(this.state.addProfile){
      return < AddProfile createProfile={this.createProfile} changeAddProfileState={this.changeAddProfileState} />
    }
  }

  changeAddProfileState = () => {
    this.setState({addProfile: true})
  }

  componentDidMount() {
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
    .then(profile => this.setState({
      profiles: [...this.state.profiles, profile]
    }))
    .then(()=>this.setState({addProfile: false}))
  }

  render() {
    return (
      <>
        <Navburger logout={this.props.logout} addProfile={this.changeAddProfileState}/>
        <Paper style={{padding: 12, margin: 12 }}>
          {this.renderAddProfile()}
          {this.state.profiles.length ?
            < ProfileCollection profiles={this.state.profiles} userId={this.props.userId} />
            : < AddProfile createProfile={this.createProfile} />
          }
        </Paper>
      </>
    )
  }
}

export default Home;
