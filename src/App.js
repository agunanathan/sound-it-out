import { BrowserRouter as Router } from 'react-router-dom'

import AppRouter from './AppRouter'
import './App.css'

function App() {
  return (
    <div className="container-content">
      <Router>
        <AppRouter />
      </Router>
    </div>
  )
}

export default App
