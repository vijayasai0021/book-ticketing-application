import React from "react";
import {Link} from 'react-router-dom'

const Poster = (props) => {
    return(
        <Link to={`/movies/${props.id}`}>
            <div>
                    
            </div>
        </Link>
    )
    // return <div>{props.original_title}</div>
}

export default Poster;