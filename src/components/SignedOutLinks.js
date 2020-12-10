import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/authors">Our Team</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Contact</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
           
            {/*<li><input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off" />
<label class="btn btn-outline-primary" for="btn-check-outlined">Single toggle</label></li>*/}
        </ul>
        </>
    )
}

export default SignedOutLinks
