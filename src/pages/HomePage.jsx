import React from 'react';
import MovieList from '../components/MovieList';

const HomePage = ({ movies, loading, error }) => {
  return (
    <div className="container mt-4">
      {loading && <div className="text-center"><p>Loading...</p></div>}
      {error && <div className="text-center"><p>Error: {error}</p></div>}
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default HomePage;
