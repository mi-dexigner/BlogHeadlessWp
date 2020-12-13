import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import logo from '../logo.png'

const Navbar = ({props}) => {
    const loggedIn = localStorage.getItem('loggedIn');
    return (
        
          <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-white shadow-sm flex-md-nowrap">
            <div className="container mx-auto flex justify-between">
                
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt=""/>
                    </Link>
              
            <div className="collapse navbar-collapse" id="navbarSupportedContent ms-auto">
  
                <form className="d-flex ms-auto">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-success" type="submit">Search</button>
</form>
{/*<SignedInLinks />*/}
{loggedIn ? <SignedInLinks />: <SignedOutLinks />}
               
                </div>
            </div>
        </nav>
       
    )
}

export default Navbar
