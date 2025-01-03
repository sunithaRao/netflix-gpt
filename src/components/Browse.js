import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useComedyMovies from "../hooks/useComedyMovies";
import { MainContainer } from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  useComedyMovies();

  return (
    <div className="">
      <Header />
      <div>
        <MainContainer />
      </div>
      <div>
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
