import React from 'react'
import firebase from '../firebase_setup/firebase'

class Home extends React.Component {
  logout() {
    firebase.auth.signOut()
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>You're logged in</h1>
        <button style={{ margin: '10px' }} onClick={this.logout}>
          Logout
        </button>
      </div>
    )
  }
}
export default Home
