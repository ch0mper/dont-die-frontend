import React, { Component } from 'react';
import Record from './Record';
import Suggestion from './Suggestion';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

class ProfileCard extends Component {

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
        <Typography>
          TODO: below buttons don't work yet
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          View
        </Button>
        <Button size="small" color="primary" variant="contained">
          Edit
        </Button>
      </CardActions>
        ----------<br />----------<br />
        TODO in ProfileCard.js: show/hide {`<Record />`} for VIEW onClick
        <Record profileId={this.props.profile._id} />
      </div>
    )
  }
}

export default ProfileCard;
