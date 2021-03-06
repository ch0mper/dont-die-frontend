import React, { Component } from 'react';
import Record from './Record';
import Suggestion from './Suggestion';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';


class ProfileCard extends Component {

  state = {
    showRecords: false,
    viewButton: true,
    records: [],
    vaccines: [],
    allVaccines: []
  }

  showRecords = () => {
    this.setState({showRecords: !this.state.showRecords, viewButton: !this.state.viewButton})
  }

  componentDidMount() {
    this.fetchRecords()
    .then(this.fetchAllVaccines)
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
    let vaccines = this.state.records.map( record => {
      fetch(`http://localhost:5000/api/vaccines/${record.vaccineId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(resp => resp.json())
      .then(vaccine => {
        vaccine.recordId = record._id
        this.setState({
          vaccines: [...this.state.vaccines, vaccine]
        })
      })
    })
  }

  fetchAllVaccines = () => {
    return fetch(`http://localhost:5000/api/vaccines/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(resp => resp.json())
    .then(allVaccines => {
    allVaccines.sort(function(a, b){
      return a.age-b.age
    })
      this.setState({allVaccines})
    })
  }

  addVaccine = (e) => {
    fetch(`http://localhost:5000/api/records/`, {
      method:'POST',
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type':'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify({
        vaccineId: e.target.vaccine.value,
        profileId: this.props.profile._id
      })
    })
    .then( res => res.json() )
    .then(record => this.setState({
      records: [...this.state.records, record]
    }))
    .then(this.fetchVaccines)
    .then(() => console.log(this.state.vaccines, "!records"))
  }

  deleteVaccine = (recordId) => {
    fetch(`http://localhost:5000/api/records/${recordId}/`, {
      method:'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type':'application/json',
        Accept: 'application/json'
      }
    })
    .then(resp => resp.json())

    .then( deletedRecord => {
      let filteredRecords = this.state.records.filter(record => record._id !== deletedRecord._id)
      let filteredVaccines = this.state.vaccines.filter(vaccine => vaccine._id !== deletedRecord.vaccineId)
      this.setState({ records: filteredRecords, vaccines: filteredVaccines })
    })
  }

  render() {
    return(
      <div>
      <CardContent>
        <Typography variant="h5" align="center">
          {this.props.profile.firstName} {this.props.profile.lastName}
        </Typography>
        <Card style={{padding: 12, margin: 10}}>
          <Suggestion allVaccines={this.state.allVaccines} profile={this.props.profile} vaccines={this.state.vaccines} />
        </Card>
      </CardContent>
      <CardActions>
        <Button onClick={this.showRecords} size="small" color="primary" variant="contained">
          {this.state.viewButton ? 'View' : 'Hide'}
        </Button>
      </CardActions>
        { this.state.showRecords &&
          <Record allVaccines={this.state.allVaccines} addVaccine={this.addVaccine} deleteVaccine={this.deleteVaccine} vaccines={this.state.vaccines} />
        }
      </div>
    )
  }
}

export default ProfileCard;
