import React from "react";
import VideosSlider from "./Ui/VideoSlider";

const Videos = () => {
  return (
    <div className="w-full lg:flex flex-col items-center px-4 hidden" id="Trailers">
      <div className="w-[90%]">
        <span className="font-black Inter text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-[0.1em] text-left">
          TRAILERS
        </span>
      </div>
      <VideosSlider />
    </div>
  );
};

export default Videos;
