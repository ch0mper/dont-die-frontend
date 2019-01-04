import React, { Component } from 'react';
import Vaccine from './Vaccine';
import Typography from '@material-ui/core/Typography';
import AddVaccines from './AddVaccines';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

class Record extends Component {

  state = {
    showVaccines: false,
    viewVaccineButton: true,
    neededVaccines: []
  }

  componentDidMount(){
    this.neededVaccines()
  }

  getVaccineIds = () => {
    let vaccineIds = this.props.vaccines.map(vaccine => vaccine._id)
    return vaccineIds
  }

  showVaccines = () => {
    this.setState({showVaccines: !this.state.showVaccines, viewVaccineButton: !this.state.viewVaccineButton})
  }

  neededVaccines = () => {
    let vaccineIds = this.getVaccineIds()
    let neededVaccines = this.props.allVaccines.filter( vaccine => !vaccineIds.includes(vaccine._id))
    this.setState({neededVaccines})
  }


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
          <Button onClick={this.showVaccines} size="small" variant="contained" color="primary" style={{margin: 20}}>
            {this.state.viewVaccineButton ? 'Add Vaccine' : 'Done Adding'}
          </Button>
        </CardActions>
        { this.state.showVaccines &&
          <AddVaccines neededVaccines={this.state.neededVaccines} allVaccines={this.props.allVaccines} addVaccine={this.props.addVaccine} deleteVaccine={this.props.deleteVaccine} vaccines={this.props.vaccines}/>
        }
      </div>
    )
  }
}

export default Record;
