import React,{useState,useEffect} from 'react'
import axios from "../services/axios";

const FeaturedMedia = ({id}) => {
    const [media, setMedia] = useState('')
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(`/media/${id}`);
             console.log(request.data);
            setMedia(request.data);
        }
        fetchData();
    },[id])
    return (
        <>
      {/*{console.log('media_details',media.media_details.sizes.full.source_url)}*/}
           <img src={media.media_details.sizes.full.source_url} className="card-img-top" alt={media.title.rendered} />
        </>
    )
}

export default FeaturedMedia
