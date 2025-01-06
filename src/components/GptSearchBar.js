import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";
import { GPT_RESULTS } from "../utils/constants";

export const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log("langKey::", langKey);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query." +
      searchText.current.value +
      "Only give me the names of 5 movies, comma seperated. Like the example results. Example Result: Gadar, Sholay, Don, Golmaal";

    const searchMovieOMDB = async (movie) => {
      const data = await fetch(
        "https://www.omdbapi.com/?t=" + movie.trim() + "&apikey=7c4df11c"
      );
      const json = await data.json();
      return json;
    };
    /*  
    let gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log("gptResults:", gptResults);
    */

    const gptMovies = GPT_RESULTS.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieOMDB(movie));

    const omdbResults = await Promise.all(promiseArray);

    console.log(omdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: omdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-col-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptPlaceholder}
        ></input>
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
