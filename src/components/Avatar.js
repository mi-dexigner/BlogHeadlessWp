import React from 'react'

const Avatar = ({url}) => {
    return (
        <>
           <img src={url} className="img-fluid rounded-circle w-50" alt=""/> 
        </>
    )
}

export default Avatar
