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
    // let vaccineIds = this.state.records.map( record => {
    //   console.log('alan', record)
    //   return record.vaccineId
    // })

    //let recordIds = this.state.records.map( record => record._id)
    let vaccines = this.state.records.map( record => {
      fetch(`http://localhost:5000/api/vaccines/${record.vaccineId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(resp => resp.json())
      .then(vaccine => {
        //console.log('record', record)
        vaccine.recordId = record._id
        this.setState({
          vaccines: [...this.state.vaccines, vaccine]
        })})
    })
  }

  addVaccine = () => {
    // post to /records
    // appends to vaccines like in fetchVaccines
    console.log('add vaccine clicked')
  }

  deleteVaccine = () => {
    // delete to /records/:id
    console.log('delete vaccine clicked')
  }

  render() {
    console.log('DOES THIS HAVE RECORDIDS - YES IT DOES', this.state.vaccines)
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
          <Record addVaccine={this.addVaccine} deleteVaccine={this.deleteVaccine} vaccines={this.state.vaccines}/>
          : null
        }
      </div>
    )
  }
}

export default ProfileCard;
