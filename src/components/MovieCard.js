import React from "react";

export const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-38 pr-4">
      <img alt="Movie Card" src={posterPath}></img>
    </div>
  );
};
