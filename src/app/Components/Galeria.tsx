import React from "react";
import GifGrid from "./GifGrid";
import ImageGrid from "./Ui/ImageGrid";

const Galeria = () => {
  return (
    <div className="w-full lg:flex flex-col items-center h-[130vh] tv:max-h-[30vh] px-4 py-8 overflow-hidden">
      <div className="w-full lg:w-[90%] tv:max-w-6xl">
        <span className="font-black Inter text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-[0.1em] text-left">
          GALERIA
        </span>
      </div>
      <ImageGrid />
    </div>
  );
};

export default Galeria;
