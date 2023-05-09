import firebase from './firebase_setup/firebase'

function newFBKey() {
  const db = firebase.database()
  const dbRef = db.ref()
  const data = dbRef.push()
  return data.getKey()
}

export default newFBKey
