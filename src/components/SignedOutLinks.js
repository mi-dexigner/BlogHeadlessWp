import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <>
        <ul className="right hide-on-med-and-down">
            <li><NavLink to="/blogs">Blogs</NavLink></li>
            <li><NavLink to="/register">Signup</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      <a href="!#" data-target="nav-mobile" className="sidenav-trigger">
          <i className="material-icons">menu</i></a>
        </>
    )
}

export default SignedOutLinks
