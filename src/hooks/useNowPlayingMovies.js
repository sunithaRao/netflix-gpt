import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    const response = await fetch(
      "https://www.omdbapi.com/?s=sun&apikey=7c4df11c"
    );
    console.log("response:", response);
    const finalResult = await response.json();
    console.log(finalResult.Search);
    // setMovie(finalResult.Search);
    dispatch(addNowPlayingMovies(finalResult.Search));
  };

  useEffect(() => {
    fetchMovie();
  }, []);
};

export default useNowPlayingMovies;
