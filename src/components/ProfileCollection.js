import React, { Component } from 'react';
import ProfileCard from './ProfileCard';

class ProfileCollection extends Component {

  // componentDidMount(){
  //  fetch(`http://localhost:5000/api/profiles`, {
  //      headers: {
  //          Authorization: `Bearer ${localStorage.getItem('token')}`
  //      }
  //  })
  //      .then( res=> res.json())
  //      .then( user => {
  //          if(!user.error) this.setState( { user } )
  //          else this.setState( { errorMessage: user.error } )
  //      })
  //  }


  render() {
    return(
      <div>
        { this.props.profiles.map( profile => (
          <ProfileCard profile={profile} />
        ))}
      </div>
    )
  }
}

export default ProfileCollection;
