import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import '../styles/Navbar.css';
import Logo from './Logo';

const Navbar = ({props}) => {
    const loggedIn = localStorage.getItem('loggedIn');


    return (
        
          <nav className="sticky-tops navbar navbar-expand-lg navbar-light bg-white shadow-sms py-5 flex-md-nowrap">
            <div className="container mx-auto flex justify-between">
                <Logo/>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
                <form className="d-flex ms-auto d-none d-md-flex">
  <input className="form-control me-2" type="search" placeholder="Discover news, articles and more..." aria-label="Discover news, articles and more..." />
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
