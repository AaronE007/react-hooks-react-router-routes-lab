import React from "react";
import { movies } from "../data";

function Movies() {
  const movieItems = movies.map((director) => (
    <div key={movies.name}>
      <h2>{movies.name}</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.genres}>{genres}</li>
        ))}
      </ul>
    </div>
  ));


  return <div>
  <h1>Movies Page</h1>
  {movieItems}
  </div>;
}

export default Movies;
