import React from 'react'
import Login from './Login'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="container-parent">
      {/* header */}
      <nav className="header-container">
        <div className="nav-left">
          <NavLink
            to="./"
            style={({ isActive }) =>
              isActive
                ? {
                    color: '#00ADB5',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '22px',
                  }
                : {
                    color: '#eeeeee',
                    textDecoration: 'none',
                  }
            }
          >
            Logo
          </NavLink>
        </div>
        <div className="nav-right">
          <NavLink
            to="./Login"
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: 'none',
                    color: '#00ADB5',
                    fontWeight: 'bold',
                    fontSize: '22px',
                  }
                : {
                    color: '#eeeeee',
                    textDecoration: 'none',
                  }
            }
            id="login"
          >
            Login
          </NavLink>
        </div>
      </nav>
      <hr />
    </div>
  )
}
export default Header
