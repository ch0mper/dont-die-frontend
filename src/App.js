import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {

  state = {
    // users: [],
    // vaccines: [],
    currentUserId: localStorage.id
  }

  fetchUsers = () => {
    fetch('http://localhost:5000/api/users')
    .then(resp => resp.json())
    .then(users => this.setState({users}))
  }

  fetchVaccines = () => {
    fetch('http://localhost:5000/api/vaccines')
    .then(resp => resp.json())
    .then(vaccines => this.setState({vaccines}))
  }

  componentDidMount() {
    this.fetchUsers()
    //this.fetchVaccines()
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
    .then(res => res.json())
    .then( result => {
        localStorage.setItem('token', result.token)
        localStorage.setItem('id', result.id)
        this.setState({currentUserId: result.id})
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h1 className="display-1"> don't die :) </h1>
            {localStorage.token ?
              < Home userId={this.state.currentUserId} />
              : < Login login={this.login}/>
            }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
