import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
           <NavLink className="nav-link" activeClassName='active' to="/">Home</NavLink></li>
      <li className="nav-item">
           <NavLink className="nav-link" activeClassName='active' to="/authors">Our Team</NavLink></li>
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName='active' to="/contact">Contact</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName='active' to="/admin/login">Login</NavLink></li>
        </ul>
        </>
    )
}

export default SignedOutLinks
