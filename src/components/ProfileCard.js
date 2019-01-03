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
    viewButton: true
  }

  showRecords = () => {
    this.setState({showRecords: !this.state.showRecords, viewButton: !this.state.viewButton})
  }

  render() {
    return(
      <div>
      <CardContent>
        <Typography variant="h5" align="center">
          {this.props.profile.firstName} {this.props.profile.lastName}
        </Typography>
        <Typography variant="h6">
          alert: get your shot soon!
        </Typography>
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
          <Record profileId={this.props.profile._id} />
          : null
        }
      </div>
    )
  }
}

export default ProfileCard;
