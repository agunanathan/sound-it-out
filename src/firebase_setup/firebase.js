import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: 'AIzaSyCgboD9f6pdWnDHvPLHg_RLBLg4hfc0dAM',
  authDomain: 'sounditout-7280c.firebaseapp.com',
  projectId: 'sounditout-7280c',
  storageBucket: 'sounditout-7280c.appspot.com',
  messagingSenderId: '1087968572',
  appId: '1:1087968572:web:8e3fdd7d93382c0172ba39',
  // The value of `databaseURL` depends on the location of the database
  databaseURL: 'https://sounditout-7280c-default-rtdb.firebaseio.com/',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
window.firebase = firebase
export default firebase
