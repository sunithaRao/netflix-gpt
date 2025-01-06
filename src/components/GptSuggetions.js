import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";

export const GptSuggetions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  console.log("movieResults", movieResults);
  console.log("movieNames", movieNames);
  if (!movieNames) return null;
  return (
    movieResults && (
      <div className="p-6">
        {movieResults?.map((movie, index) => (
          <div className="bg-black p-10 w-full">
            <h1 className="text-xl lg:text-3xl py-4 bg-black text-white">
              {movieNames[index]}
            </h1>
            <MovieCard posterPath={movie.Poster} key={movie.imdbID}></MovieCard>
          </div>
        ))}
      </div>
    )
  );
};
