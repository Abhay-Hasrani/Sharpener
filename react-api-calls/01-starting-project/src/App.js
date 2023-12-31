import React, { useCallback, useEffect, useRef, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import Loader from "./components/UI/Loader";
import MovieForm from "./components/MovieForm";
import AddMovie from "./components/AddMovie";

let i = 0;
function App() {
  const intervalId = useRef(null);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) throw new Error("Something went wrong ....Retrying");
      const jsonResponse = await response.json();
      const moviesList = jsonResponse.results.map((item) => {
        return {
          id : item.episode_id,
          title: item.title,
          releaseDate: item.release_date,
          openingText: item.opening_crawl,
        };
      });
      setMovies(moviesList);
    } catch (error) {
      setError(error.message + " " + i++);
      intervalId.current = setTimeout(fetchMoviesHandler, 5000);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function cancelLoading() {
    clearTimeout(intervalId.current);
    setError(null);
  }
  function onMovieDeleteHandler(id){
    console.log("app");
    setMovies(prev=>{
      const newarr = prev.filter((item)=>item.id!=id);
      return newarr;
    });
  }

  let content = <h3>No Movies To Show</h3>;
  if (movies.length > 0) content = <MoviesList onDelete={onMovieDeleteHandler} movies={movies} />;
  if (isLoading) content = <Loader />;
  if (error)
    content = (
      <h3>
        {error} <button onClick={cancelLoading}>Cancel</button>
      </h3>
    );

    function addMovieHandler(movie) {
      console.log(movie);
    }

  return (
    <React.Fragment>
      <section>
        {/* <MovieForm/> 
        using udemy trainers form instead of above */}
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
