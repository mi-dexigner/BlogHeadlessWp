import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Navbar from "../components/Navbar";
import axios from "../services/axios";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FeaturedMedia from "../components/FeaturedMedia";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get("/posts");
        //console.log(request.data);
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
  
  return (
    <>
      <Navbar />
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-12">
          
             
              {error && <Message message={error} error />}
              {posts.map((post) => (
                  <div className="card border-0" key={post.id}>
                    <FeaturedMedia id={post.featured_media} />
                    
                    <div className="card-body">
                      <h2
                        className="card-title"
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      ></h2>
                      <div
                        className="card-text"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      ></div>

                      <div className="card-footer  border-0 bg-light bg-gradient">
                        <div className="row">
                          <div className="col-sm-6 text-left">
                            {" "}
                            <span>
                              <Moment fromNow>{post.date}</Moment>{" "}
                            </span>
                          </div>
                          <div className="col-sm-6  text-end">
                            <Link to={`post/${post.slug}`}>Read more</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               
              ))}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
