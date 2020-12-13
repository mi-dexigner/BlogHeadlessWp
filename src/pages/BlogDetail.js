import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import axios from '../services/axios'
import Loader from '../components/Loader';
import Message from '../components/Message';

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
                <div className="row">

            { error && <Message message={error} error/>}
            <div className="card border-0">
            <div className="card-content">
           {!post.length &&(
               <>
               <h2 className="card-title" dangerouslySetInnerHTML={{__html:post.title.rendered}}></h2>
            <div dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
               </>
           )}
           
         </div>
         {!post.length &&( <div className="card-action">
         <span className="text-left"><Moment fromNow>{post.date}</Moment>  </span>
        </div>
        )}
         </div>
         </div>
         </div>
        </>
    )
}

export default BlogDetail
