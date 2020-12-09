import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
            <div className="row">
      <div className="col s12">
      
      <ul className="collection">
      <li className="collection-item">
      <div className="card darken-1">
      <div className="card-image">
          <img src="http://lorempixel.com/1920/280/nature/6/" alt="011" />
          <span className="card-title">Card Title</span>
          <Link class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></Link>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
         <Link to="#" className="text-left">2 mintue ago </Link>
          <Link to="/blogs/2" className="text-right">Read more</Link>
        </div>
      </div>
      </li>
      <li className="collection-item z-depth-1">
      <div className="card darken-1">
        <div className="card-content">
        <span className="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
        <Link to="#" className="text-left">2 mintue ago </Link>
          <Link to="/blogs/1" className="text-right">Read more</Link>
        </div>
      </div>
      </li>
      
    </ul>

      </div>
    </div>
   
      </div>
        </div>
    )
}

export default Home
