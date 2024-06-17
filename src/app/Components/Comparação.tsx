import React from "react";

const Comparação = () => {
  return (
    <div className="w-full lg:flex flex-col items-center h-[130vh] px-4 py-8 overflow-hidden">
      <div className="w-full lg:w-[90%]">
        <span className="font-black Inter text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-[0.1em] text-left">
          COMPARAÇÃO
        </span>
      </div>
      <div className="w-full lg:w-[90%] relative">
        <video
          src="../../../assets/videos/ComparisonVideo.mp4"
          className="absolute inset-0 object-cover w-full h-full z-[0] select-none cursor-pointer"
          controls
        ></video>
      </div>
    </div>
  );
};

export default Comparação;
