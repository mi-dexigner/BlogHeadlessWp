import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AuthorCard from '../components/AuthorCard'
import Loader from '../components/Loader'
import axios from "../services/axios";
import Message from '../components/Message'

const Authors = () => {
    const [authors, setAuthors] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
          try {
            const request = await axios.get("/users");
           setAuthors(request.data);
            //console.log(request.data);
            return request.data;
          } catch (error) {
           setError(error.response.data.message);
            console.error(error.response.data.message);
          }
        }
    
        fetchData();
    
      }, []);
    if(!authors) return <Loader/>
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
                   {error && <Message message={error} error />}
                   {authors.map((author) => (<>
                    <AuthorCard key={author.id} avatar_urls={author.avatar_urls[96]}  name={author.full_name.length === 0 ? author.full_name : author.name} slug={author.slug} position="Creative Designer"
                       description={author.description}
                       instagram="#"
                       twitter="#"
                       website={author.url.length === 0 ? author.url :'#' }
                       />
                   </>))}
                   </div>
               </div>
           </section>
           <Footer />
        </>
    )
}

export default Authors
