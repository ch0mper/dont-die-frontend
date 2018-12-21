import React, { Component } from 'react';
import Signup, { Component } from './components/Signup';

class Login extends Component {

  render() {
    return(
      <div>
        <form onSubmit={this.login}>
            <h2>Welcome (Login or Signup)</h2>
            <div className="form-group">
                <label>Email </label>
                <input name="emailInput" className="form-control" type="text" />
            </div>
            <div className="form-group">
                <label>Password </label>
                <input name="passwordInput" className="form-control" type="password" />
            </div>
            <button  className="btn btn-secondary">Login</button>
        </form>
      </div>
    )
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
    })
  }

  // if email doesn't exist then POST to http://localhost:5000/api/users/signup/
  // then render < Signup /> which prompts user to fill out profile and record

  // use browser router

}

export default Login;
