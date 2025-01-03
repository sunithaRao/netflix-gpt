import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  console.log("nowPlayingmovies:", movies);
  return (
    movies && (
      <div className="px-6">
        <h1 className="text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies?.map((movie) => (
              <MovieCard
                posterPath={movie.Poster}
                key={movie.imdbID}
              ></MovieCard>
            ))}
          </div>
        </div>
      </div>
    )
  );
};
