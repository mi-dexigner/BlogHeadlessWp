import React, { useEffect, useState } from "react";
import Heading from './Heading'
import axios from "../services/axios";
import Loader from "./Loader";
import '../styles/WeeklyRow.css'
import { Link } from "react-router-dom";
const WeeklyRow = ({title,fetchUrl}) => {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        async function fetchData() {
          try {
            const request = await axios.get(fetchUrl);
            setPosts(request.data);
            return request.data;
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchData();
    
      }, [fetchUrl]);
      if(!posts) return <Loader />
    return (
        <section className="weekly__product">
            <div className="container pt-5">
         <Heading title={title} />
        <hr className="spacer"/>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
        {posts.map(post =>(
           <div className="cards" key={post.title}>
                <div className="cards__inner text-white"> 
<div className="image_sec">
<Link to={`post/${post.slug}`}>
<div className="picture">
<picture>
    <img src={post.featured.full} className="card-img" alt={post.title}  loading="lazy" />
    </picture>
</div>
</Link>
</div>
<div className="card-overlay">
<Link to={`post/${post.slug}`}>{post.title}</Link>
<div className="author_sec">
    <div className="author_inner">
    <Link to={`author/${post.author.slug}`}>
        <div className="author_pic">
            <div className="author__pic_inner">
        <picture><img src="https://flexiblog-news.netlify.app/static/41bc1caf29080d62bd156256ffb0cd6a/97df7/jane-smith.png" alt="" loading="lazy"/></picture></div>
        </div>
    </Link>
    <div className="">
    <Link to={`author/${post.author.slug}`}>{post.author.name} </Link>
            <div className="post__meta">
                {post.date}
            </div>
        </div>
    </div>
</div>
            </div>
            </div>
           </div>
        ))}
       </div>
        </div>
        </section>
    )
}

export default WeeklyRow
