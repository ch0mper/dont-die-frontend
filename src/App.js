import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/Login';
import Home from './components/Home';
import {BrowserRouter} from 'react-router-dom'

class App extends Component {

  state = {
    users: [],
    vaccines: []
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
    this.fetchVaccines()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h1 className="display-1"> don't die :) </h1>
            {localStorage.token ?
              < Home />
              : < Login />
            }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
