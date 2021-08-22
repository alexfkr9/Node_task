import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {   

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
        <span>Menu:</span>
        <ul id="nav-mobile" className="right">
          <li><Link to="/">List of Users</Link></li>
          <li><Link to="/user">Create user</Link></li>     
        </ul>
      </div>
    </nav>
  )
}

