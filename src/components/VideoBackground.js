import React from "react";
import { MAIN_MOVIE } from "../utils/constants";

const VideoBackground = () => {
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={MAIN_MOVIE.youtube_link_with_key + "&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
