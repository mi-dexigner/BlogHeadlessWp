import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Moment from 'react-moment';
import { useParams } from 'react-router-dom';
import axios from '../services/axios'
import Loader from '../components/Loader';
import Message from '../components/Message';

const BlogDetail = () => {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('');
    const [post,setPost] = useState({
        title: '',
        content:'',
        date:''
      });
    //const [error,setError] = useState('');
    const {slug} = useParams();
    useEffect(() => {
        async function fetchData() {
            try {
            const request = await axios.get(`/posts?slug=${slug}`);
            //console.log(request.data[0]);
            setPost(request.data[0]);;
            setLoading(false);
            return request.data;
            }catch (error) {
              setLoading(false);
              setError(error.response.data.message);
              console.error(error.response.data.message);
            }
          
            }
            
            fetchData();
        
      },[slug]);

      console.log(post)
    return (
        <div>
             <Navbar />
             <div className="container">
                <div className="row">
                { loading && <Loader />}
            { error && <Message message={error} error/>}
            <div className="card darken-1">
            <div className="card-content">
           {!post.length &&(
               <>
               <h2 className="card-title" dangerouslySetInnerHTML={{__html:post.title.rendered}}></h2>
            <div dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
               </>
           )}
           
         </div>
         <div className="card-action">
         <span className="text-left"><Moment fromNow>{post.date}</Moment>  </span>
        </div>
         </div>
         </div>
         </div>
        </div>
    )
}

export default BlogDetail
