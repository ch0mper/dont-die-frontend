import React, { Component } from 'react';
import Record from './Record';
import Suggestion from './Suggestion';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

class ProfileCard extends Component {

  state = {
    showRecords: false,
    viewButton: true,
    records: [], // done
    vaccines: [] // done
  }

  showRecords = () => {
    this.setState({showRecords: !this.state.showRecords, viewButton: !this.state.viewButton})
  }

  componentDidMount() {
    this.fetchRecords()
    .then(this.fetchVaccines)
  }

  fetchRecords = () => {
    return fetch(`http://localhost:5000/api/profiles/${this.props.profile._id}/records/`, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(resp => resp.json())
    .then(records => this.setState({records}))
  }

  fetchVaccines = () => {
    let vaccineIds = this.state.records.map( record => record.vaccineId )
    let vaccines = vaccineIds.map( vaccineId => {
      fetch(`http://localhost:5000/api/vaccines/${vaccineId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(resp => resp.json())
      // append the vaccine onto this.state.vaccines
      .then(vaccine => this.setState({
        vaccines: [...this.state.vaccines, vaccine]
      }))
    })
  }

  render() {
    return(
      <div>
      <CardContent>
        <Typography variant="h5" align="center">
          {this.props.profile.firstName} {this.props.profile.lastName}
        </Typography>
        <Suggestion vaccines={this.state.vaccines} />
      </CardContent>
      <CardActions>
        <Button onClick={this.showRecords} size="small" color="primary" variant="contained">
          {this.state.viewButton ? 'View' : 'Hide'}
        </Button>
        <Button size="small" color="primary" variant="contained">
          TODO: Edit (profile)
        </Button>
      </CardActions>
        { this.state.showRecords ?
          <Record profileId={this.props.profile._id} records={this.state.records} vaccines={this.state.vaccines}/>
          : null
        }
      </div>
    )
  }
}

export default ProfileCard;
