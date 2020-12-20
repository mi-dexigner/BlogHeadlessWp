import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "../services/axios";
import requests from "../services/requests";
import Loader from './Loader';
const Logo = () => {
    const [logo, setLogo] = useState(null)
    useEffect(() => {
        async function fetchData() {
          try {
            const request = await axios.get(requests.fetchLogo);
            setLogo(request.data.url)
            console.log(request.data.url);
            return request.data;
          } catch (error) {
            console.error(error.response.data.message);
          }
        }
    
        fetchData();

    }, []);

    if(!logo) return <Loader/> 
    return (
        <Link to="/" className="navbar-brand">
                        <img src={logo} alt=""/>
       </Link>
    )
}

export default Logo
