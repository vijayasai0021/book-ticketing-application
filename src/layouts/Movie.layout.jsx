import React from 'react'
import MovieNavbar from '../components/navbar/MovieNavbar.Component';

const MovieLayoutHOC = (Components) =>({...props})=> {
  return (
    <div>
      <MovieNavbar />
      <Components {...props} />
      <div>footer</div>
    </div>
  );
}

export default MovieLayoutHOC;