import React, { Component } from 'react';
import Vaccine from './Vaccine';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

  render() {
    return(
      <div>
        <CardContent>
          <Typography variant='h5'>
            Records
          </Typography>
          <Typography>
            {this.state.records.map( record => (
              <Vaccine vaccineId={record.vaccineId} key={record._id} />
            ))}
          </Typography>
        </CardContent>

        <CardActions>
          <Button onClick={this.addVaccine} size="small" variant="contained">
            Add Vaccine
          </Button>
        </CardActions>
      </div>
    )
  }
}

export default Record;
