import React from 'react';
import './watchElement.css';

const Watch = ({movie}) => {
    
    return ( 
        <React.Fragment>
        <iframe width="560" height="315" 
            src={`https://www.youtube-nocookie.com/embed/${movie.ytubeSrc}`}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        <h1>{movie.title}</h1>
        </React.Fragment>
     );
}

export default Watch;
