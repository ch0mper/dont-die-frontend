import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Login from './components/Login';
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

  signup = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/api/users/signup/',{
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
      console.log(result)
        localStorage.setItem('token', result.token)
        localStorage.setItem('id', result.id)
        this.setState({currentUserId: result.id})
    })
  }

  render() {
    return (
      <div className="container">

        {localStorage.token ?
          < Home userId={this.state.currentUserId} logout={this.logout} />
          : < Login login={this.login} signup={this.signup}/>
        }
      </div>
    );
  }
}

export default App;
