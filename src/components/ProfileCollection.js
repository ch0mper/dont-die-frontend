import React, { Component } from 'react';
import ProfileCard from './ProfileCard';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

class ProfileCollection extends Component {

  render() {
    return(
      <div>
        <Grid container spacing={24} style={{padding: 24}}>
          { this.props.profiles.map( profile => (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <Card style={{padding: 12}}>
                <ProfileCard profile={profile} key={profile._id} userId={this.props.userId} />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

export default ProfileCollection;
