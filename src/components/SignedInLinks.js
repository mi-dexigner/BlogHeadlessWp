import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    const userName = localStorage.getItem('userName');
    const handleLogout = () => {
		localStorage.removeItem( 'token' );
		localStorage.removeItem( 'userName' );
		localStorage.removeItem( 'loggedIn' );
		//window.location.href = '/';
	};
    return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item"><NavLink to='/admin/post-new' className="nav-link">New Post</NavLink></li>
       <li className="nav-item"><NavLink to={`/admin/dashboard/${userName}`} className="btn btn-floating pink lighten-1">{userName}</NavLink></li>
       <li className="nav-item"><NavLink to="/" onClick={handleLogout} className="nav-link">Log Out</NavLink></li>
   </ul>
    )
}

export default SignedInLinks
