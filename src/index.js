import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const routing = (
  <Router>
    {/* App container 100vh make a flex column*/}
    <div className="main-container">
      {/* hard width and height and fix on top/bottom parent to have padding try avoid margin*/}
      <Header />
      {/* surround with another div with flex=1 , overflow scroll */}
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Footer />
    </div>
  </Router>
)

const container = document.getElementById('root')
const root = createRoot(container)
root.render(routing)
