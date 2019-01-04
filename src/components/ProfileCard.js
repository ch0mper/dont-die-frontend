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
    records: [], // done
    vaccines: [], // done
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
      return a.age-b.age //CHANGE TO A.AGE AND B.AGE WHEN BARBIE DOES SEEDS
    })
      this.setState({allVaccines})
    })
  }

  addVaccine = () => {
    // post to /records
    // appends to vaccines like in fetchVaccines

    console.log('add vaccine clicked')
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
    // .then(resp => resp.json())
    //
    // .then((deletedRecord) => {
    //   let filteredRecords = this.state.records.filter(record => record._id !== deletedRecord._id)
    //   console.log('array of old records', this.state.records)
    //   console.log('filtered', filteredRecords)
    //   console.log('record id to delete', deletedRecord, deletedRecord._id)
    //   this.setState({ records: filteredRecords })
    // })

    //.then(() => console.log('THIS SHOULD MATCH FILTERED', this.state.records))
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
        <Button size="small" color="primary" variant="contained">
          TODO: Edit (profile)
        </Button>
      </CardActions>
        { this.state.showRecords &&
          <Record allVaccines={this.state.allVaccines} addVaccine={this.addVaccine} deleteVaccine={this.deleteVaccine} vaccines={this.state.vaccines}/>
        }
      </div>
    )
  }
}

export default ProfileCard;
