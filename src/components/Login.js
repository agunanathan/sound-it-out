import React from 'react'
import firebase from '../firebase_setup/firebase'

class Login extends React.Component {
  login() {
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully logged in')
      })
      .catch((err) => {
        console.log('Error:' + err.toString())
      })
  }

  signUp() {
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up')
      })
      .catch((err) => {
        console.log('Error:' + err.toString())
      })
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }} className="container-content">
        <h1>Login</h1>
        <div>
          <div>Email</div>
          <input
            id="email"
            placeholder="Enter your email address"
            type="email"
          ></input>
        </div>
        <div>
          <div>Password</div>
          <input
            id="password"
            placeholder="Enter your password"
            type="password"
          ></input>
        </div>
        <button style={{ margin: '10px' }} onClick={this.login}>
          Login
        </button>
        <button style={{ margin: '10px' }} onClick={this.signUp}>
          Sign Up
        </button>
      </div>
    )
  }
}
export default Login
