import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';

// show form for creating profile and add records

class AddProfile extends Component {

  render() {
    return(
      <div>
        <form onSubmit={this.props.createProfile} style={{padding: 8}} >
            <div className="form-group">
                <label>First Name </label>
                <input name="firstName" className="form-control" type="text" />
            </div>
            <div className="form-group">
                <label>Last Name </label>
                <input name="lastName" className="form-control" type="text" />
            </div>
            <div className="form-group">
                <label>Birthdate </label>
                <input name="birthdate" className="form-control" type="date" />
            </div>
            <div className="form-group">
                <label>Gender </label>
                <input name="gender" className="form-control" type="text" />
            </div>
            <Button type="submit" variant="contained">add profile</Button>
        </form>
      </div>
    )
  }
}

export default AddProfile;
