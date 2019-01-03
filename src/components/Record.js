import React, { Component } from 'react';
import Vaccine from './Vaccine';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

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

  render() {
    return(
      <CardContent>
        <Typography variant='h5'>
          {`-- <Record /> --`}
        </Typography>
        <Typography>
          {this.state.records.map( record => (
            <Vaccine vaccineId={record.vaccineId} key={record._id} />
          ))}
        </Typography>
        <Typography>
          [+ vaccine] [- vaccine] buttons
        </Typography>
      </CardContent>
    )
  }
}

export default Record;
