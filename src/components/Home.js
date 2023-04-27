import React from 'react'
import firebase from '../firebase_setup/firebase'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/database'
class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "You're logged in",
      button: 'Logout',
    }
  }

  //logout function
  logout() {
    firebase.auth().signOut()
    this.setState({
      message: "You've Logged Out",
      button: 'Click on Login above',
    })
  }

  //html for page after login goes here
  render() {
    return (
      <div style={{ textAlign: 'center' }} className="container-content">
        <h1>{this.state.message}</h1>
        <button style={{ margin: '10px' }} onClick={this.logout.bind(this)}>
          {this.state.button}
        </button>
      </div>
    )
  }
}
export default Home
