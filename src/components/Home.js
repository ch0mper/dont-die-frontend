import React, { Component } from 'react';
import ProfileCollection from './ProfileCollection';
import Navburger from './Navburger';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class Home extends Component {
  state = {
    profiles: []
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

  render() {
    return (
      <Paper style={{padding: 12}}>
        < Navburger />
        < ProfileCollection profiles={this.state.profiles} userId={this.props.userId}/>
        <Button onClick={this.props.logout} variant="contained">log out [move to 🍔]</Button>
      </Paper>
    )
  }
}

export default Home;
