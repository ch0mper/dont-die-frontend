import React, { Component } from 'react';

class Login extends Component {

  // fetch(api/user/auth or /api/user/login), {
  //   method: "POST",
  //   body:JSON.stringify( userfield.value, pwfield.value )
  // }

  render() {
    return(
      <div>
        <form onSubmit={this.login}>
            <h2>Login</h2>
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
    fetch('http://localhost:5000/api/signin/',{
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
    .then(() => {
      res => res.json()
      console.log(res)
    })
    .then( result => {
        localStorage.setItem('token', result.token)
    })
  }

}

export default Login;
