import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/FourZeroFour.css";

const FourZeroFour = () => {
  return (
   <>
   <Navbar/>
    <article className="bg-light py-5">
     <div className="container">
       <div className="row">
         
        <h1>Sorry, this page isn't available.</h1>
        <p>You may have mistyped the address or the page may have moved.</p>
      
      <Link to="/" title="Back to site" className="btn btn-primary rounded-pill w-auto px-4 py-3">
        Go to Homepage
      </Link>
       </div>
     </div>
    </article>
   </>
  );
};

export default FourZeroFour;
