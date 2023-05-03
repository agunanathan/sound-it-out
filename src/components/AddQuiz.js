import React, { useState, useEffect, Component } from 'react'
import firebase from '../firebase_setup/firebase'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/database'

export default function AddQuiz() {
  // Declare multiple state variables!
  const [label, setLabel] = useState('Add a Quiz')
  const [button, setButton] = useState('Create')
  const [message, setMessage] = useState('')
  const [isConnected, setIsConnected] = useState(false)
  const [database, setDatabase] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(message)
  }

  return (
    <div style={{ textAlign: 'center' }} className="container-content">
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
