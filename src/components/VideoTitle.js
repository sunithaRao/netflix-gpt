import React, { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [isMoreInfo, setMoreInfo] = useState(false);
  const handlePlayButton = () => {
    window.open("https://www.youtube.com/watch?v=Ow0b1SwZN3I&t=5s", "_blank");
    return false;
  };
  const toggleMoreInfo = () => {
    setMoreInfo(!isMoreInfo);
  };
  return (
    <div className="w-screen aspect-video pt-[10%] px-6 md:px-24 absolute  text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      {isMoreInfo && (
        <div
          className="hidden md:inline-block bg-slate-400 text-black inline-block p-4 text-xl rounded-lg m-4 transition ease-in-out delay-250
        "
        >
          <p className="" id="moreInfo">
            <div>Rating: 4.8</div>
            <div>Voice over: ShahRukh Khan</div>
          </p>
        </div>
      )}
      <div className="my-4 md:m-0">
        <button
          className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl rounded-lg mx-2 hover: bg-opacity-80"
          onClick={handlePlayButton}
        >
          Play
        </button>
        <button
          onClick={toggleMoreInfo}
          className="hidden md:inline-block mx-2 my-4 bg-gray-500  text-white p-4 px-12 text-xl bg-opacity-50 font-bold rounded-lg"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
