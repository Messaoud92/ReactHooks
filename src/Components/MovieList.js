import React from 'react'
import MovieAdd from './MovieAdd';
import MovieCard from './MovieCard';


function MovieList({movies , setmovies,text}) {
    console.log(movies);
  return (
    
  <div> 
    <div className='btnadd'>
    <MovieAdd movies={movies} setmovies={setmovies}/>
    </div> 
      
      <div className='box' >
       {movies.filter((el)=>el.name.includes(text)).map((el)=><MovieCard movie={el}/>).reverse()}
     </div>
  
  </div>

  )
}

export default MovieList