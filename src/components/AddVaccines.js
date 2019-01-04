import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


class AddVaccines extends Component {


  render() {
    return(
      <div>
        <CardContent>
          <Typography variant='h5' align="center">
            Needed Vaccines
          </Typography>
          <Card style={{padding: 12, margin: 10}}>
            
          </Card>
        </CardContent>
      </div>
    )
  }
}

export default AddVaccines;
