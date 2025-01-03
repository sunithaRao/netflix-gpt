import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  console.log(movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-80 pl-12 relative z-20 bg-transparent">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

          <MovieList title={"Comedy"} movies={movies.comedyMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
