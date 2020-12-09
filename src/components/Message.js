import React from 'react'

const Message = ({message,error,success}) => {
    return (
        <div className={`card-panel ${error && "red lighten-2"} ${success && "green lighten-1"}`}>
            {message}
        </div>
    )
}

export default Message
