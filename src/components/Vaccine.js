import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

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
      <div>
      <CardContent>
        <Typography variant='h6'>
          {this.state.vaccine.name}
        </Typography>
        <Typography variant='caption'>
          {this.state.vaccine.disease_description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button onClick={this.props.deleteVaccine} size="small" variant="contained">
          Delete
        </Button>
      </CardActions>
      </div>
    )
  }
}

export default Vaccine;
