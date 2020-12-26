import React from 'react'
import '../styles/TextBase.css'

const TextBase = () => {
    return (
        <section className='bg-white p-5 mt-2 text_base_section'>
        <div className="container">
          <div className="row">
         <div className="col-5">
         <h2>Get Inspired to Achieve<br /><span>Enhanced Outcomes.</span></h2>
         </div>
         <blockquote className="col-7">
           <p>“While one person hesitates because he feels inferior, the other is busy making mistakes and becoming superior.”</p>
           <h2>Henry C. Link</h2>
         </blockquote>
          </div>
        </div>
      </section>
    )
}

export default TextBase
