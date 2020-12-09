import React from 'react'
import Navbar from '../components/Navbar'

const BlogDetail = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                <div className="card darken-1">
      <div className="card-image">
          <img src="http://lorempixel.com/1920/280/nature/6/" alt="011" />
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
         <span className="text-left">2 mintue ago </span>
        </div>
      </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail
