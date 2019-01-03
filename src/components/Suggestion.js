import React, { Component } from 'react';

class Suggestion extends Component {
  render() {
    console.log(this.props.vaccines)
    return(
      <div>
        Upcoming vaccines and boosters!
      </div>
    )
  }
}

export default Suggestion;
