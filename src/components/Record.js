import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Record extends Component {

  state = {
    vaccines: []
  }

  componentDidMount() {
    //this.fetchVaccines()
    console.log('userId: ', this.props.userId, 'profileId: ', this.props.profileId)
  }

  // getVaccines = () => {
  //   this.props.vaccIdsArray.map( vaccId => (
  //     this.fetchVaccines(vaccId)
  //   ))
  // }

  fetchVaccines = () => {
    fetch(`http://localhost:5000/api/profiles/${this.props.profileId}/vaccines/`, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(resp => resp.json())
    .then(vaccines => this.setState({vaccines}))
    .then( () => console.log('vaccines', this.state.vaccines))
  }

  render() {
    return(
      <div>
        <Typography variant='h5'>
          {`<Record />`}
        </Typography>
        <Typography>
          {/* this.state.vaccines.map(names and details) */}
        </Typography>
        <Typography>
          (+ vaccine) (- vaccine) buttons
        </Typography>
      </div>
    )
  }
}

export default Record;
