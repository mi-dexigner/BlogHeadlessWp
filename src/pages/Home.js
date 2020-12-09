import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import Navbar from '../components/Navbar'
import axios from '../services/axios'
import Loader from '../components/Loader';
import Message from '../components/Message';

const Home = () => {
  const [loading,setLoading] = useState(true);
  const [posts,setPosts] = useState([]);
  const [error,setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
      const request = await axios.get('/posts');
      //console.log(request.data);
      setLoading(false);
      setPosts(request.data);
      return request.data;
      }catch (error) {
        setLoading(false);
        setError(error.response.data.message);
        console.error(error.response.data.message);
      }
    
      }
      
      fetchData();
 
  }, [])
    return (
        <div>
            <Navbar/>
            <div className="container">
            <div className="row">
      <div className="col s12">
    
      <ul className="collection">
      { loading && <Loader/>}
      { error && <Message message={error} error/>}
            {posts.map(post =>( <li className="collection-item" key={post.id}>
            <div className="card darken-1">
            <div className="card-content">
    <h2 className="card-title" dangerouslySetInnerHTML={{__html:post.title.rendered}}></h2>
    <div dangerouslySetInnerHTML={{__html:post.excerpt.rendered}}></div>
    
    <div className="card-action">
    <div className="col s6 left-align"> <span><Moment fromNow>{post.date}</Moment> </span></div>
    <div className="col s6 right-align"><Link to={`/${post.slug}`}>Read more</Link></div>
        
          
        </div>
    </div>
    </div>
            </li> ))}
       
     {/* <li className="collection-item">
      <div className="card darken-1">
      <div className="card-image">
          <img src="http://lorempixel.com/1920/280/nature/6/" alt="011" />
          <span className="card-title">Card Title</span>
          <Link to='/' className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></Link>
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
      </li>*/}
      
    </ul> 
    

      </div>
    </div>
   
      </div>
        </div>
    )
}

export default Home
