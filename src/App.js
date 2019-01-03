import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
// import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {

  state = {
    currentUserId: localStorage.id
  }

  login = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/api/users/signin/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            Accept: 'application/json'
        },
        body:JSON.stringify({
            email: e.target.emailInput.value,
            password: e.target.passwordInput.value
        })
    })
    .then( res => res.json() )
    .then( result => {
        localStorage.setItem('token', result.token)
        localStorage.setItem('id', result.id)
        this.setState({currentUserId: result.id})
    })
  }

  logout = () => {
    localStorage.clear();
    this.setState({currentUserId: null})
  }

  signup = () => {
    // if email doesn't exist
    // POST to http://localhost:5000/api/users/signup/
    // ??? this.setState({currentUserId: result.id})

    // then render < Signup /> which prompts user to fill out profile and record
  }

  render() {
    return (
      <div className="container">
        <Typography component="title" variant="h3">
          don't die :)
        </Typography>

        {localStorage.token ?
          < Home userId={this.state.currentUserId} logout={this.logout} />
          : < Login login={this.login} signup={this.signup}/>
        }
      </div>
    );
  }
}

export default App;
