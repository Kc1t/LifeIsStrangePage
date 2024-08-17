// Modules
import React from "react";
import Image from "next/image";

// Assets
import MaxInGuitar from "@/Assets/images/Background/MaxInGuitar.jpg";
import Tracks from "./Ui/Tracks";

const Soundtrack = () => {
  return (
    <div className="w-full lg:flex flex-col items-center justify-center gap-6 px-4 overflow-hidden" id="Soundtrack">
      <div className="w-full lg:w-[90%] h-[30vh] lg:h-[80vh] tv:max-w-6xl tv:max-h-[30vh] relative flex items-end justify-end px-2 md:px-12 py-4">
        <Image
          src={MaxInGuitar}
          className="absolute inset-0 object-cover w-full h-full z-[0] select-none cursor-pointer"
          alt="Max In Guitar"
        />
        <span className="font-black Inter text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-[0.1em] text-left z-[20] text-white">
          GAME SOUND
        </span>
      </div>
      <div className="w-full lg:w-[90%] tv:max-w-6xl tv:max-h-[30vh] flex items-end justify-end">
        <span className="font-black Inter text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-[0.1em] text-left">
          TRACK
        </span>
      </div>
      <Tracks />
    </div>
  );
};

export default Soundtrack;
