import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  async function fetchMoviesHandler() {
    const response = await fetch("https://swapi.dev/api/films/");
    const jsonResponse = await response.json();
    
    const moviesList = await jsonResponse.results.map((item) => {
      return {
        title: item.title,
        releaseDate: item.release_date,
        openingText: item.opening_crawl,
      };
    });
    setMovies(moviesList);
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
