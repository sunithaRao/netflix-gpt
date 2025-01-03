import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { MAIN_MOVIE } from "../utils/constants";

export const MainContainer = () => {
  const { original_title, overview } = MAIN_MOVIE;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};
