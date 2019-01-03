import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

class Login extends Component {
  render() {
    return(
      <main>
      <CssBaseline />
        <Paper style={{padding: 8, margin: 8}} >
          <form onSubmit={this.props.login} style={{padding: 8}} >
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

        <Paper style={{padding: 8, margin: 8}} >
          <Typography component="h2" variant="h5">
            are you new?
          </Typography>
          <form onSubmit={this.props.signup} style={{padding: 8}} >
              <div className="form-group">
                  <label>Email </label>
                  <input name="emailInput" className="form-control" type="text" />
              </div>
              <div className="form-group">
                  <label>Password </label>
                  <input name="passwordInput" className="form-control" type="password" />
              </div>
              <Button type="submit" variant="contained">sign up</Button>
          </form>
        </Paper>
      </main>
    )
  }

}

export default Login;
