import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-24 absolute  text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl font-bold rounded-lg mx-2 hover: bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-black p-4 px-12 text-xl bg-opacity-50 font-bold rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
