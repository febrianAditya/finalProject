import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div className="row movie-list"> 
      {movies.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
