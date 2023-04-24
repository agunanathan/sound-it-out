import React from 'react'
import Login from './Login'
import Search from './Search'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="container-parent">
      {/* header */}
      <nav className="header-container">
        <div className="nav-left">
          <ul>
            <li>
              <NavLink
                to="./"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: '#000000',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '22px',
                      }
                    : {
                        color: '#545e6f',
                        textDecoration: 'none',
                      }
                }
              >
                Logo
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <NavLink
                to="./Login"
                style={({ isActive }) =>
                  isActive
                    ? {
                        textDecoration: 'none',
                        color: '#000000',
                        fontWeight: 'bold',
                        fontSize: '22px',
                      }
                    : {
                        color: '#545e6f',
                        textDecoration: 'none',
                      }
                }
                id="login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  )
}
export default Header
