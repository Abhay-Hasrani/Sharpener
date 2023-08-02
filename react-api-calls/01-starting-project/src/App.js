import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import Loader from "./components/UI/Loader";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchMoviesHandler() {
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
    const jsonResponse = await response.json();
    const moviesList = await jsonResponse.results.map((item) => {
      return {
        title: item.title,
        releaseDate: item.release_date,
        openingText: item.opening_crawl,
      };
    });
    setIsLoading(false);
    setMovies(moviesList);
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <Loader/>}
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
