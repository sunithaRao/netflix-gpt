import React, { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [isMoreInfo, setMoreInfo] = useState(false);
  const handlePlayButton = () => {
    window.open("https://www.youtube.com/watch?v=8fOtaOPPf_Q", "_blank");
    return false;
  };
  const toggleMoreInfo = () => {
    setMoreInfo(!isMoreInfo);
  };
  return (
    <div className="w-screen aspect-video pt-[10%] px-24 absolute  text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      {isMoreInfo && (
        <div
          className="bg-slate-400 text-black inline-block p-4 text-xl rounded-lg m-4 transition ease-in-out delay-250
        "
        >
          <p className="" id="moreInfo">
            <div>Rating: 4.8</div>
            <div>Voice over: ShahRukh Khan</div>
          </p>
        </div>
      )}
      <div>
        <button
          className="bg-white text-black p-4 px-12 text-xl font-bold rounded-lg mx-2 hover: bg-opacity-80"
          onClick={handlePlayButton}
        >
          Play
        </button>
        <button
          onClick={toggleMoreInfo}
          className="bg-gray-500 text-black p-4 px-12 text-xl bg-opacity-50 font-bold rounded-lg"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
