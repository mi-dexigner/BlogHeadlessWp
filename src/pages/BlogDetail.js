import React,{useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import axios from '../services/axios'
import Loader from '../components/Loader';
import Message from '../components/Message';

const BlogDetail = (props) => {
    const [loading,setLoading] = useState(true);
    const [post,setPost] = useState('');
    const [error,setError] = useState('');
    const slug = props.match.params.id;
    useEffect(() => {
        async function fetchData() {
        
          //console.log(slug)
          try {
          const request = await axios.get(`/posts?slug=${slug}`);
         
          //console.log(request.data[0]);
          setPost(request.data[0]);
          setLoading(false);
          return request.data;
          }catch (error) {
            setLoading(false);
            setError(error.response.data.message);
            console.error(error.response.data.message);
          }
        
          }
          
          fetchData();
         
      }, [slug])

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                { loading && <Loader/>}
      { error && <Message message={error} error/>}
                <div className="card darken-1">
      <div className="card-image">
          {/*<img src="http://lorempixel.com/1920/280/nature/6/" alt="011" />*/}
        </div>
        <div className="card-content">
  {console.log(post)}
        {/*{/*<h2 className="card-title" dangerouslySetInnerHTML={{__html:post.title.rendered}}></h2>
    <div dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}></div>*/}
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
