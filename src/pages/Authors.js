import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AuthorCard from '../components/AuthorCard'

const Authors = () => {
    return (
        <>
        <Navbar/>
           <section className="bg-light p-5 rounded">
            <div className="container">
                <div className="row">
                <h1 className="fw-light">Team Members</h1>
                <p className="text-muted">FlexiBlog theme comes with a pre-made contact form component. You can integrate this form with serverless services such as Formspree, Getform, FormKeep and others to receive form submissions via email</p>
                </div>
            </div>
           </section>
           <section>
               <div className="container">
                   <div className="row">
                       <AuthorCard avatar_urls="https://images.generated.photos/Q8U80m2oTnWKLw_Qb6fA5mmMJQG5RtIissYG14a_6Cw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAxNTYwMzguanBn.jpg"  name="kane Smith Smith" slug="jane-smith" position="Creative Designer"
                       description= "Sed commodo, est quis maximus fermentum, massa ipsum euismod neque, in varius risus tellus quis lacus. Sed ac bibendum odio."
                       instagram="#"
                       twitter="#"
                       website="#"
                       />
                       <AuthorCard avatar_urls="https://images.generated.photos/Q8U80m2oTnWKLw_Qb6fA5mmMJQG5RtIissYG14a_6Cw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAxNTYwMzguanBn.jpg"  name="kane Smith Smith" slug="jane-smith" position="Creative Designer"
                       description= "Sed commodo, est quis maximus fermentum, massa ipsum euismod neque, in varius risus tellus quis lacus. Sed ac bibendum odio."
                       instagram="#"
                       twitter="#"
                       website="#"
                       />
                   </div>
               </div>
           </section>
           <Footer />
        </>
    )
}

export default Authors
