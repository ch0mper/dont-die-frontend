import React, { Component } from 'react';
import Vaccine from './Vaccine';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

class Record extends Component {

  render() {
    return(
      <div>
        <CardContent>
          <Typography variant='h5' align="center">
            Vaccines
          </Typography>

          {this.props.vaccines.map( vaccine => (
            <Card style={{padding: 12, margin: 10}}>
              <Vaccine vaccine={vaccine} deleteVaccine={this.props.deleteVaccine} />
            </Card>
          ))}
        </CardContent>

        <CardActions>
          <Button onClick={this.props.addVaccine} size="small" variant="contained" color="primary" style={{margin: 20}}>
            Add Vaccine
          </Button>
        </CardActions>
      </div>
    )
  }
}

export default Record;
