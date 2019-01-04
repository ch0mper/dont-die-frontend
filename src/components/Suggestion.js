import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Suggestion extends Component {

  getVaccineIds = () => {
    let vaccineIds = this.props.vaccines.map(vaccine => vaccine._id)
    return vaccineIds
  }

  neededVaccines = () => {
    let vaccineIds = this.getVaccineIds()
    let neededVaccines = this.props.allVaccines.filter( vaccine => !vaccineIds.includes(vaccine._id))
    return neededVaccines
  }

  neededVaccinesList = () => {
    let neededVaccines = this.neededVaccines()
    let neededVaccinesList = neededVaccines.map(vaccine => {
      return <li>{vaccine.name}</li>
    })
    return neededVaccinesList
  }

  render() {

    return(
      <div>
        Upcoming vaccines and boosters!
        <br />
        <ul>{this.neededVaccinesList()}</ul>
      </div>
    )
  }
}

export default Suggestion;
