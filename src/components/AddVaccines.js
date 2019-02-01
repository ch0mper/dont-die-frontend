import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class AddVaccines extends Component {

  generateForm = () => {
    return this.props.neededVaccines.map(vaccine => (
      <div className="form-group form-inline">
        <input name="vaccine" id={vaccine.name} value={vaccine._id} className="form-control" type="radio" />
        <label style={{padding: 7}} for={vaccine.name}>{vaccine.name}</label>
      </div>))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("addVaccine id", e.target.vaccine.value)
    this.props.addVaccine(e)
  }

  render() {
    return(
      <div>
        <CardContent>
          <Typography variant='h5' align="center">
            Needed Vaccines
          </Typography>
          <Card style={{padding: 12, margin: 10}}>
            <form onSubmit={e => this.handleSubmit(e)} style={{padding: 8}}>
              <div className="form-group">
                {this.generateForm()}
              </div>
              <Button type="submit" variant="contained">Add Vaccine</Button>
            </form>
          </Card>
        </CardContent>
      </div>
    )
  }
}

export default AddVaccines;
