import React, { Component } from 'react';
import Signup from './Signup';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

class Login extends Component {
  render() {
    return(
      <main>
      <CssBaseline />
        <Paper style={{padding: 12}} >
          <Typography component="h2" variant="h5">
            --TODO: Login OR Signup--
          </Typography>

          <form onSubmit={this.props.login}>
              <div className="form-group">
                  <label>Email </label>
                  <input name="emailInput" className="form-control" type="text" />
              </div>
              <div className="form-group">
                  <label>Password </label>
                  <input name="passwordInput" className="form-control" type="password" />
              </div>
              <Button type="submit" variant="contained">Login</Button>
          </form>
        </Paper>
      </main>
    )
  }

  // if email doesn't exist then POST to http://localhost:5000/api/users/signup/
  // then render < Signup /> which prompts user to fill out profile and record

}

export default Login;
