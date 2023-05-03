import React from 'react'
import firebase from '../firebase_setup/firebase'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }
  // e is the event, which in this case is change, target is the element that triggered the event,
  // which in this case is the input, and value is the value of the input element
  onChange = (e) => {
    // console.log(e.target.id)
    if (e.target.id === 'email') this.setState({ email: e.target.value })
    if (e.currentTarget.id === 'password')
      this.setState({ password: e.target.value })
  }

  //handles login using firebase.auth.signInWithEmailandPassword
  login = (e) => {
    const { email, password } = this.state
    // firebase.auth.signInWithEmailandPassword returns a promise,
    // hence, using then block to capture the event and
    // catch is used to handle any errors
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

  //handles signup using firebase.auth.createUserWithEmailAndPassword
  signUp = (e) => {
    // const email = document.querySelector('#email').value
    // const password = document.querySelector('#password').value
    // firebase.auth.createUserWithEmailAndPassword returns a promise,
    // hence, using then block to capture the event and
    // catch is used to handle any errors
    const { email, password } = this.state

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

  // render the html form
  render() {
    return (
      // JSX convention and enclose all html tags with div tag
      <div style={{ textAlign: 'center' }} className="container-content">
        <h1>Login</h1>
        <div>
          <div>Email</div>
          <input
            id="email"
            placeholder="Enter your email address"
            type="email"
            value={this.state.value}
            onChange={this.onChange}
          ></input>
        </div>
        <div>
          <div>Password</div>
          <input
            id="password"
            placeholder="Enter your password"
            type="password"
            value={this.state.value}
            onChange={this.onChange}
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
