// Modules
import React from "react";

// Assets
import ComparisonPoster from "@/Assets/images/Posters/Comparison.png";

const Comparação = () => {
  return (
    <div
      className="w-full lg:flex flex-col items-center tv:items-start lg:h-[125vh] tv:max-w-6xl tv:max-h-[30vh] gap-6 px-4 py-8 overflow-hidden"
      id="Comparação"
    >
      <div className="w-full lg:w-[90%]">
        <span className="font-black Inter text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-[0.1em] text-left">
          COMPARAÇÃO
        </span>
      </div>
      <div className="w-full lg:w-[90%] h-[30vh] lg:h-[90%] tv:w-full relative">
        <video
          src="https://kc1t.github.io/LifeIsStrangePage/assets/videos/ComparisonVideo.mp4"
          className="absolute inset-0 object-cover w-full h-full z-[0] select-none cursor-pointer"
          controls
          poster="https://img.youtube.com/vi/CjNl-enDTUM/maxresdefault.jpg"
        ></video>
      </div>
    </div>
  );
};

export default Comparação;
