import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Navbar from "../components/Navbar";
import axios from "../services/axios";
import requests from "../services/requests";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FeaturedMedia from "../components/FeaturedMedia";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchPosts);
        console.log(request.data);
       setPosts(request.data);
        return request.data;
      } catch (error) {
        setError(error.response.data.message);
        console.error(error.response.data.message);
      }
    }

    fetchData();

  }, []);

  if(!posts) return <Loader/>
  /* posts?per_page=2
  posts?order=asc
  posts?categories=33
  posts?=search[plugin]
  posts?filter[orderby]=rand&filter[posts_per_page]=1
  */
  return (
    <div>
      <Navbar />
      <div className="container pt-5">
      <Heading title="Editor's Pick This Week" />
        <hr className="spacer"/>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {error && <Message message={error} error />}
             {posts.map((post) => (
                <div className="col" key={post.id}>
                  <div className="card shadow-sm rounded  mb-3">
                  {post.featured_media!== 0 ? <FeaturedMedia id={post.featured_media} classes="bd-placeholder-img card-img-top" /> :null }
                    <div className="card-body">
                      <h4
                        className="card-title"
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      ></h4>
                      <div
                        className="card-text"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      ></div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                      <Link to={`post/${post.slug}`} className="btn btn-sm btn-outline-secondary">Read more</Link>
                      </div>
                      <span className="text-muted"> 
                              <Moment fromNow>{post.date}</Moment>{" "}
                     </span>
                      </div>
                    </div>
                  </div>
                  </div>
              ))}
            
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
