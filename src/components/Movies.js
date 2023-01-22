import React from "react";
import { movies } from "../data";

function Movies() {
  // map method to loop through a set of data
  const myMovies = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Runtime: {movie.time} min.</p>

      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Movies Page</h1>
      {myMovies}
    </div>
  );
}

export default Movies;
