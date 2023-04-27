import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBuKf7knVtK1iZtdbl1izUggg9CWSwj5q0',
  authDomain: 'test-5447f.firebaseapp.com',
  projectId: 'test-5447f',
  storageBucket: 'test-5447f.appspot.com',
  messagingSenderId: '44311559632',
  appId: '1:44311559632:web:2a520c5955c0cc70ee0dd5',
  measurementId: 'G-NM53TWRFTB',
  // The value of `databaseURL` depends on the location of the database
  databaseURL: 'https://test-5447f-default-rtdb.firebaseio.com/',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
window.firebase = firebase
export default firebase
