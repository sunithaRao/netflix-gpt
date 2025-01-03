import { useDispatch } from "react-redux";
import { addComedyMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useComedyMovies = () => {
  const dispatch = useDispatch();

  const fetchMovie = async () => {
    const response = await fetch(
      "https://www.omdbapi.com/?s=tom&apikey=7c4df11c#"
    );
    console.log("smile response:", response);
    const finalResult = await response.json();
    console.log(finalResult.Search);
    // setMovie(finalResult.Search);
    dispatch(addComedyMovies(finalResult.Search));
  };

  useEffect(() => {
    fetchMovie();
  }, []);
};

export default useComedyMovies;
