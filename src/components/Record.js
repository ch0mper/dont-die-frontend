import React, { Component } from 'react';
import Vaccine from './Vaccine';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

class Record extends Component {

  state = {
    records: []
  }

  componentDidMount() {
    this.fetchRecords()
  }

  fetchRecords = () => {
    fetch(`http://localhost:5000/api/profiles/${this.props.profileId}/records/`, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(resp => resp.json())
    .then(records => this.setState({records}))
  }

  addVaccine = () => {
    // post to /records
    console.log('add vaccine clicked')
  }

  deleteVaccine = () => {
    // delete to /records/:id
    console.log('delete vaccine clicked')
  }

  render() {
    return(
      <div>
        <CardContent>
          <Typography variant='h5' align="center">
            Vaccines
          </Typography>

          {this.state.records.map( record => (
            <Card style={{padding: 12, margin: 10}}>
              <Vaccine vaccineId={record.vaccineId} key={record._id} deleteVaccine={this.deleteVaccine} />
            </Card>
          ))}
        </CardContent>

        <CardActions>
          <Button onClick={this.addVaccine} size="small" variant="contained" color="primary" style={{margin: 20}}>
            Add Vaccine
          </Button>
        </CardActions>
      </div>
    )
  }
}

export default Record;
