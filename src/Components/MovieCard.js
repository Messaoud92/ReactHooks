import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-rating-stars-component';

function MovieCard({movie}) {
  return (
    <div >
            <Card style={{ width: '18rem' ,margin: '8px' }}>
      <Card.Img variant="top" src={movie.posterurl} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
         {movie.description}
        </Card.Text>
       <div>
       <ReactStars
            count={5}
            size={24}
            color2={'#ffd700'} 
            value={movie.rating}
            edit={false}
        />
        </div> 
        <Button variant="primary"> Trailer</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard