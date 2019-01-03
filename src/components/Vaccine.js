import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

class Vaccine extends Component {

  state = {
    vaccine: []
  }

  componentDidMount() {
    this.fetchVaccine()
  }

  fetchVaccine = () => {
    fetch(`http://localhost:5000/api/vaccines/${this.props.vaccineId}/`, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(resp => resp.json())
    .then(vaccine => this.setState({vaccine}))
  }

  render() {
    return(
      <CardContent>
        <Typography variant='h6'>
          protected from: {this.state.vaccine.name}
        </Typography>
        <Typography variant='caption'>
          what it does: {this.state.vaccine.disease_description}
        </Typography>
      </CardContent>
    )
  }
}

export default Vaccine;
