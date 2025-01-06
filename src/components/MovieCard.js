import React from "react";

export const MovieCard = ({ posterPath }) => {
  return (
    <div className="pr-4">
      <img className="w-25 md:w-40" alt="Movie Card" src={posterPath}></img>
    </div>
  );
};
