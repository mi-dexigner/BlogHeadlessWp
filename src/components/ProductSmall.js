import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../services/axios";
import Loader from "./Loader";
import '../styles/ProductSmall.css'
const ProductSmall = ({fetchUrl}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const request = await axios.get(fetchUrl);
            setPosts(request.data);
            console.log(request.data);
            return request.data;
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchData();
    
      }, [fetchUrl]);
      if(!posts) return <Loader />
    
    return (
       <section className="product__small">
            <hr className="spacer"/>
           <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
            {posts.map(post =>(
<article className="cards" key={post.title}>
<div className="cards__inner">
  <div className="cards__img">
   <Link to={`post/${post.slug}`}>
       <img src={post.featured.vertical} alt={post.title} />
   </Link>
  </div>
  <div className="cards__content">
    <strong className="d-inline-block mb-2 text-success">Design</strong>
   <Link to={`post/${post.slug}`}>{post.title}</Link>
   <div className="author_sec">
    <div className="author_inner">
    <Link to={`author/${post.author.slug}`}>{post.author.name} </Link>
            <div className="post__meta">
                {post.date}
            </div>
        </div>
</div>
  </div>
</div>
</article>
 ))}
        </div>
       </div>
       </section>
    )
}

export default ProductSmall
