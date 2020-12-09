import React from "react";
import { Link } from "react-router-dom";
import "../styles/FourZeroFour.css";

const FourZeroFour = () => {
  return (
    <article className="error-page">
      <hgroup>
        <h1>404</h1>
        <h2>oops! page not found</h2>
      </hgroup>
      <Link to="/" title="Back to site" className="error-back">
        back
      </Link>
    </article>
  );
};

export default FourZeroFour;
