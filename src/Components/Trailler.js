import React from 'react'
import { useParams } from 'react-router-dom'

function Trailler({movies}) {
    const params = useParams();
    const movie = movies.filter((el)=> el.name===params.name)[0];
    console.log(movie);
  return (
    <div>
       
         <img src={movie.posterurl} />
        <h1> H {movie.name} </h1>
        <p>P{movie.description}</p>

    </div>
  )
}
export default Trailler