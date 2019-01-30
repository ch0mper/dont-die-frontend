import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

// show form for creating profile and add records

class AddProfile extends Component {

  render() {
    return(
      <div>
        <form onSubmit={e => this.props.createProfile(e)} style={{padding: 8}} >
            <div className="form-group">
                <label>First Name: </label>
                <input name="firstName" className="form-control" type="text" />
            </div>
            <div className="form-group">
                <label>Last Name: </label>
                <input name="lastName" className="form-control" type="text" />
            </div>
            <div className="form-group">
                <label>Birthdate: </label>
                <input name="birthdate" className="form-control" type="date" />
            </div>
            <div className="form-group">
                <label>Gender:</label>
                <div className="form-group form-inline">
                  <input name="gender" id="gender1" value="female" className="form-control" type="radio" />
                  <label style={{padding: 10}} for="gender1">Female</label>
                </div>
                <div className="form-group form-inline">
                  <input name="gender" id="gender2" value="male" className="form-control" type="radio" />
                  <label style={{padding: 10}} for="gender2">Male</label>
                </div>
                <div className="form-group form-inline">
                  <input name="gender" id="gender3" value="other" className="form-control" type="radio" />
                  <label style={{padding: 10}} for="gender3">Other</label>
                </div>
            </div>
            <Button color="primary" type="submit" variant="contained">add profile</Button>
        </form>
      </div>
    )
  }
}

export default AddProfile;
