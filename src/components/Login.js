import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Login extends Component {

    state ={
      new_user: false
    }

    loginOrSignup = () => {
      if(!this.state.new_user){
        return <Paper style={{ padding: 12, margin: 50, maxWidth: 400 }} align="center">
          <Typography component="h2" variant="h5">
            Login
          </Typography>
          <form onSubmit={this.props.login} style={{ padding: 8 }} >
            <div className="form-group">
              <label>Email </label>
              <input name="emailInput" className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label>Password </label>
              <input name="passwordInput" className="form-control" type="password" />
            </div>
            <Button color="primary" type="submit" variant="contained">Login</Button>
          </form>
          <Button onClick={()=>this.setState({new_user: true})} color="primary" variant="contained">Are you new? Sign Up</Button>
        </Paper>
      }else{
        return <Paper style={{ padding: 12, margin: 50, maxWidth: 400 }} align="center" >
          <Typography component="h2" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={this.props.signup} style={{ padding: 8 }} >
            <div className="form-group">
              <label>Email </label>
              <input name="emailInput" className="form-control" type="text" />
            </div>
            <div className="form-group">
              <label>Password </label>
              <input name="passwordInput" className="form-control" type="password" />
            </div>
            <Button color="primary" type="submit" variant="contained">sign up</Button>
          </form>
        </Paper>
      }
    }

  render() {
    return(
      <main>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
        <Typography component="title" variant="h3" color='inherit'>
          don't die :)
        </Typography>
        </Toolbar>
      </AppBar>
      <div align="center">
        {this.loginOrSignup()}
      </div>
      </main>
    )
  }

}

export default Login;
