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

  nextVaccine = () => {
    let neededVaccines = this.neededVaccines()
    if(neededVaccines.length){
      let nextVaccine = neededVaccines.map(vaccine => {
        return <li>{vaccine.name}</li>
      })
      return <li>{nextVaccine[0]}</li>
    } else {
      return <h3><marquee>You're all up to date!</marquee></h3>
    }
  }

  render() {

    return(
      <div>
        Next vaccine needed:
        <br />
        <ul>{this.nextVaccine()}</ul>
      </div>
    )
  }
}

export default Suggestion;
