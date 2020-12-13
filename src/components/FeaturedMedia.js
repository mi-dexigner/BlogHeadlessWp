import React,{useState,useEffect} from 'react'
import axios from "../services/axios";
import Loader from "../components/Loader";
const FeaturedMedia = ({id,classes}) => {
    const [media, setMedia] = useState('')
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(`/media/${id}`);
            setMedia(request.data);
        }
        fetchData();
    },[id])
    if(!media) return <Loader/>
    return (
        <>
         <img src={media.media_details.sizes.full.source_url} className={`${classes}`} alt={media.title.rendered} />
        </>
    )
}

export default FeaturedMedia
