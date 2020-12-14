import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <section className="bg-light p-5 rounded">
            <div className="container">
                <div className="row">
                <h1 className="fw-light">Let's Connect</h1>
                <p className="text-muted">FlexiBlog theme comes with a pre-made contact form component. You can integrate this form with serverless services such as Formspree, Getform, FormKeep and others to receive form submissions via email.</p>
                </div>
            </div>
           </section>
           <section className="container mb-5">
               <div className="row">
                   <div className="bg-white rounded  p-5">
                   <div className="row">
  <div className="col">
  <div className="form-floating mb-3">
    <input type="text" className="form-control" placeholder="Name" aria-label="Name" />
   <label htmlFor="floatingInput">Name</label>

    </div>
  </div>
  <div className="col">
  <div className="form-floating mb-3">
    <input type="text" className="form-control" placeholder="Company Name" aria-label="Company Name" />
   <label htmlFor="floatingInput">Company Name</label>

    </div>
  </div>
</div>
                   <div className="row">
  <div className="col">
  <div className="form-floating mb-3">
    <input type="text" className="form-control" placeholder="Name" aria-label="Name" />
    <label htmlFor="floatingInput">Name</label>
    </div>
  </div>
  <div className="col">
  <div className="form-floating mb-3">
    <input type="email" className="form-control" placeholder="Email" aria-label="Email" />
    <label htmlFor="Email">Email</label>
    </div>
  </div>
</div>
                   <div className="row">
  <div className="col">
  <div className="form-floating mb-3">
    <input type="Text" className="form-control" placeholder="Subject" aria-label="Subject" />
    <label htmlFor="floatingInput">Subject</label>
    </div>
  </div>
</div>
                   <div className="row">
  <div className="col">
  <div className="form-floating mb-3">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
    <label htmlFor="YourMessage">Your Message</label>

    </div>
  </div>
</div>
<div className="row">
<div className="col">
    <button type="submit" className="btn btn-primary rounded-3 btn-lg">Submit</button>
  </div>
</div>
                   </div>
               </div>
           </section>
         <Footer />   
        </div>
    )
}

export default Contact
