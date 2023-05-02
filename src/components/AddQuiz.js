import React, { useState, useEffect } from 'react'
import firebase from '../firebase_setup/firebase'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/database'

export default function AddQuiz() {
  // Declare multiple state variables!
  const [label, setLabel] = useState('Add a Quiz')
  const [button, setButton] = useState('Create')
  const [message, setMessage] = useState(null)

  // useEffect(() => {
  //   console.log(firebase.database)
  // }, [])

  // e is the event, which in this case is change, target is the element that triggered the event,
  // which in this case is the input, and value is the value of the input element
  // onChange = (e) => {
  //   // console.log(e.target.id)
  //   if (e.target.id === 'quizName') setMessage(e.useState.value)
  // }

  // addQuiz = (e) => {
  //   const { message, button } = this.state
  //   console.log({ message })
  // }

  return (
    <div style={{ textAlign: 'center' }} className="container-content">
      <label>{label}</label>
      <span>: </span>
      <input type="text" placeholder="Quiz Name" id="quizName"></input>
      <button style={{ margin: '10px' }}>{button}</button>
    </div>
  )
}
