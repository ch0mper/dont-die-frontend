import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

class Vaccine extends Component {

  handleClick = id => {
    this.props.deleteVaccine(id)
  }

  render() {
    return(
      <div>
      <CardContent>
        <Typography variant='h6'>
          {this.props.vaccine.name}
        </Typography>
        <Typography variant='caption'>
          {this.props.vaccine.disease_description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button onClick={this.handleClick} size="small" variant="contained">
          Delete
        </Button>
      </CardActions>
      </div>
    )
  }
}

export default Vaccine;
