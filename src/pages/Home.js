import React from "react";
import Navbar from "../components/Navbar";
import requests from "../services/requests";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import WeeklyRow from "../components/WeeklyRow";
import ProductSmall from "../components/ProductSmall";
import TextBase from "../components/TextBase";

const Home = () => {
  return (
    <div>
      <Navbar />
        <WeeklyRow title="Editor's Pick This Week" fetchUrl={requests.fetchWeekly}/>
        <ProductSmall  fetchUrl={`${requests.fetchPosts}/?limit=6`} />
        <TextBase />
        <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
