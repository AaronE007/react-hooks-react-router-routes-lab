import React from "react";
import { movies } from "../data";

function Movies() {
  const movieItems = movies.map((director) => (
    <div key={director.name}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
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
