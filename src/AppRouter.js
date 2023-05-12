import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes, useLocation, Navigate } from 'react-router-dom'

import firebase from './firebase_setup/firebase'
import Temporary from './components/Temporary'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Login from './components/Login'
import Home from './components/Home'
import './AppRouter.css'
import Demo from './components/Demo'

const AppRouter = () => {

  const [ auth, setAuth ] = useState(null)

  useEffect(() => {
    firebase.auth()
      .onAuthStateChanged(setAuth)
  }, [])

  const location = useLocation()

  console.log(location.pathname)
  const isLoginRoute = location.pathname.toLowerCase().includes('login')
  

  return (
    <>
      {/* App container 100vh make a flex column*/}
      <div className="main-container">
        {/* hard width and height and fix on top/bottom parent to have padding try avoid margin*/}
        <Header />
        <div id='delete_me'>
          {
            auth ? (
              <div>{auth.email}</div>
            ) : (
              <div> no auth </div>
            )
          }
        </div>
        {/* surround with another div with flex=1 , overflow scroll */}
        <Routes>
          <Route path="/" element={<Temporary />} />
          
          <Route 
            path="/Login" 
            element={
              (auth && isLoginRoute) 
                ? <Navigate replace to="/home" />
                : <Login />
            } 
          />

          <Route path="/Home" element={<Home />} />
          <Route path="/Demo" element={<Demo />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default AppRouter
