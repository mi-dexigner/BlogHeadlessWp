import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom';
import axios from '../services/axios'
import Loader from '../components/Loader';
import Message from '../components/Message';
import FeaturedMedia from '../components/FeaturedMedia';

const BlogDetail = () => {
    const [error,setError] = useState('');
    const [post,setPost] = useState();
    
    const {slug} = useParams();
    useEffect(() => {
        async function fetchData() {
            try {
            const request = await axios.get(`/posts?slug=${slug}`);
            //console.log(request.data[0]);
            setPost(request.data[0]);;
            return request.data;
            }catch (error) {
              setError(error.response.data.message);
              console.error(error.response.data.message);
            }
          
            }
            // document.title = post.title.rendered
            fetchData();
           
      },[slug]);

      if(!post) return <Loader/> 
    return (
        <>
             <Navbar />
             <div className="container  pt-5">
                <div className="row-cols-1 row g-3">

            { error && <Message message={error} error/>}
            <div className="card border-0  shadow-sm">
                <FeaturedMedia id={post.featured_media} classes="img-fluid" />
            <div className="card-body">
           {!post.length &&(
               <>
               <h3 className="card-title" dangerouslySetInnerHTML={{__html:post.title.rendered}}></h3>
            <div dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
               </>
           )}
           
         </div>
         </div>
         </div>
         </div>
        </>
    )
}

export default BlogDetail
