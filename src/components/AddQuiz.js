import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import firebase from '../firebase_setup/firebase'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'react-toastify/dist/ReactToastify.css'

export default function AddQuiz({ addQuiz }) {
  // Declare multiple state variables!
  const [label] = useState('Add a Quiz')
  const [button] = useState('Create')
  const [message, setMessage] = useState('')
  const dbRef = firebase.database().ref()

  const handleSubmit = (e) => {
    // prevent default behavior of reloading forms
    e.preventDefault()
    if (!message) toast.error('Please enter a title')
    else {
      dbRef.child('quiz').push(message, (err) => {
        if (err) {
          toast.error(err)
        } else {
          toast.success('Quiz Added Successfully')
        }
      })
    }
    addQuiz(message)
    setMessage('')
  }

  return (
    <div style={{ textAlign: 'center' }} className="container-content">
      <ToastContainer />
      <form className="AddQuizForm">
        <label>{label}</label>
        <span>: </span>
        <input
          type="text"
          placeholder="Quiz Name"
          id="quizName"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button style={{ margin: '10px' }} onClick={handleSubmit}>
          {button}
        </button>
      </form>
    </div>
  )
}
