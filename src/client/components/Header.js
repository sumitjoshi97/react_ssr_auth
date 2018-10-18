import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="api/auth/google">Login</a>
  )

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Home</Link>
        <ul className="right">
          <li><Link to="/admin">admin</Link></li>
          <li><Link to="/users">users</Link></li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ auth }) => ({
  auth
})

export default connect(mapStateToProps)(Header)
