import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Suggestion extends Component {

  state = {
    vaccineIds: [],
    allVaccines: [],
    neededVaccines: []
   }

  componentDidMount(){
    this.getVaccineIds()
    this.fetchAllVaccines()
  }

  // fetchAllVaccines = () => {
  //   return fetch(`http://localhost:5000/api/vaccines/`, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('token')}`
  //     }
  //   })
  //   .then(resp => resp.json())
  //   .then(allVaccines => this.setState({allVaccines}))
  // }

  getVaccineIds = () => {
    let vaccineIds = this.props.vaccines.map(vaccine => vaccine._id)
    console.log("vaccines?????", this.props.vaccines)
    console.log("vaccine ids?????", vaccineIds)
    this.setState({vaccineIds})
  }

  neededVaccines = () => {
    let neededVaccines = this.state.allVaccines.map(
      vaccine => {
      if(!this.state.vaccineIds.includes(vaccine._id)){
        return vaccine
      }
    })
    this.setState({neededVaccines})
  }

  render() {
    // console.log("prof vaccs", this.props.vaccines)
    // console.log("all vaccs", this.state.allVaccines)
    // console.log("vaccine ids", this.state.vaccineIds)
    // console.log("needed vaccs", this.state.neededVaccines)

    return(
      <div>
        Upcoming vaccines and boosters!
      </div>
    )
  }
}

export default Suggestion;
