import React, { Component } from 'react';

// show form for creating profile and add records

class Signup extends Component {

  // if email doesn't exist then POST to http://localhost:5000/api/users/signup/

  render() {
    return(
      <div>
        sign up and fill out a profile and record here
      </div>
    )
  }
}

export default Signup;
