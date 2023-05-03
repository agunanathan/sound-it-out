import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { v4 as uuid4 } from 'uuid'

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
  const newPostRef = dbRef.push()

  const handleSubmit = (e) => {
    // prevent default behavior of reloading forms
    e.preventDefault()
    if (!message) toast.error('Please enter a title')
    else {
      dbRef.child('quiz').push(
        {
          id: uuid4(),
          title: message,
          completed: false,
          status: 'active',
          isEditing: false,
          countStudents: 0,
        },
        (err) => {
          if (err) {
            toast.error(err)
          } else {
            toast.success('Quiz Added Successfully')
          }
        }
      )
    }
    addQuiz(message)
    setMessage('')
  }

  return (
    <div style={{ textAlign: 'center' }} className="container-content">
      <ToastContainer />
      <form className="AddQuizForm" onSubmit={handleSubmit}>
        <label>{label}</label>
        <span>: </span>
        <input
          type="text"
          placeholder="Quiz Name"
          id="quizName"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button style={{ margin: '10px' }}>{button}</button>
      </form>
    </div>
  )
}
